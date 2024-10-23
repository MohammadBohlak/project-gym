import { Button } from "primereact/button";
import { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Toast } from "primereact/toast";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { useRouter } from "next/router";
import { useLoader } from "@/hook/useLoader";
import Layout from "../component/Layout";
export const url = "https://project-gym-chi.vercel.app";
// export const url = "http://localhost:3000";
export default function Add() {
  const { loader, setLoader } = useLoader();
  const router = useRouter()
  const [customers, setCustomers] = useState([]);

 
  const getCustomers = () => {
    setLoader("visible");
    axios.get(`${url}/api/customers`)
    .then((res) => {
      setCustomers(res.data);
    })
    .finally(() => {
      setLoader("hidden");
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
  // const dateString = "2024-10-4";
  // const dateObject = new Date(dateString);

  // console.log(dateObject.getDate());
  // console.log(dateObject.getMonth() + 1);
  // console.log(dateObject.getFullYear());

  // console.log(searchCustomer);

  const toast = useRef(null);
  const accept = (e) => {
    setLoader("visible")
    axios.delete(`${url}/api/customers/${e}`).then(() => {
      getCustomers();
    })
    .finally(()=>{
      setLoader("hidden")
    })
  };

  
  
  return (
    <Layout visible={loader} >
    <Toast ref={toast} />
    <ConfirmDialog />
    <div className="flex justify-content-between mb-5 flex-wrap" >
    <Button type='button' label="اضافة زبون" onClick={()=>{router.push('/customers/add-customer')}}/>
    <Button type='button' label="بحث عن زبون" onClick={()=>{router.push('/customers/search-customer')}}/>

    </div>
      
      
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
    </Layout>
  );
}
