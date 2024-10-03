import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import axios from "axios";
import { Toast } from "primereact/toast";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
const url = "http://localhost:3000";
export default function Add() {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${url}/api/customers`, {
        name: name,
        date: `2024-${month}-${day}`,
      })
      .then(() => {
        getCustomers();
      });
  };
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

      <form className="flex flex-column mb-2">
        <div className="p-inputgroup flex mb-2">
          <InputText
            placeholder="الاسم"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* <span className="pi pi-search"></span> */}

        <div className="p-inputgroup mb-2">
          <InputText
            className="w-5 ml-2"
            placeholder="اليوم"
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
          <InputText
            className="w-5"
            placeholder="الشهر"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />
        </div>
        <Button label="إضافة" onClick={handleSubmit} />
      </form>
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
