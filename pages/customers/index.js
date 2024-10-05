import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import axios from "axios";
import { Toast } from "primereact/toast";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { useRouter } from "next/router";
export const url = "https://project-gym-chi.vercel.app";
// export const url = "http://localhost:3000";
export default function Add() {
  const router = useRouter()
  const [year, setYear] = useState("");
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

 
  const getCustomers = () => {
    axios.get(`${url}/api/customers`).then((res) => {
      setCustomers(res.data);
    });
  };
  useEffect(() => {
    getCustomers();
  }, []);

  const actionButton = (rowData) => {
    const handleButtonClick = () => {
      // هنا يمكنك إرسال بيانات المستخدم المحدد عند النقر على الزر
      confirmDialog({
        message: "Do you want to delete this record?",
        header: "Delete Confirmation",
        defaultFocus: "reject",
        acceptClassName: "p-button-danger",
        accept : ()=>{accept(rowData._id)},
        reject : ()=>{},
      });
      
    };
    return(
      <>
      
      <Button className="bg-red-800 border-none outline-none" onClick={handleButtonClick} label="حذف"></Button>
      </>
    )
  };
  const dateString = "2024-10-4";
  const dateObject = new Date(dateString);

  console.log(dateObject.getDate());
  console.log(dateObject.getMonth() + 1);
  console.log(dateObject.getFullYear());

  let searchCustomer = customers.filter((e) => e.name.includes(search));
  console.log(searchCustomer);

  const toast = useRef(null);
  const accept = (e) => {
    console.log("accept" , e)
    axios.delete(`${url}/api/customers/${e}`).then(() => {
      getCustomers();
    });
  };

  
  
  return (
    <>
    <Toast ref={toast} />
    <ConfirmDialog />
    <Button className="mb-5" type='button' label="اضافة زبون" onClick={()=>{router.push('/customers/add-customer')}}/>

      <div className="p-inputgroup flex-1 mb-2">
        <InputText
          placeholder="بحث"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {search != "" && (
        <div className="card">
          <DataTable
            className="text-primary"
            value={searchCustomer}
            showGridlines
            tableStyle={{
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <Column
              className="text-primary text-center"
              field="name"
              header="الاسم"
            ></Column>
            <Column
              className="text-primary text-center"
              field="date"
              header="تاريخ التسجيل"
            ></Column>
          </DataTable>
        </div>
      )}
      <div className="card">
        <DataTable
          value={customers}
          showGridlines
          tableStyle={{ width: "100%" }}
        >
          <Column className="text-center" field="name" header="الاسم"></Column>
          <Column
            className="text-center"
            field="date"
            header="تاريخ التسجيل"
          ></Column>
          <Column
            className="text-center"
            body={actionButton}
            header="تاريخ التسجيل"
          ></Column>
        </DataTable>
      </div>
    </>
  );
}
