import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { url } from "..";
import { useRouter } from "next/router";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


export default function addCustomer() {
    const router = useRouter();
    const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${url}/api/customers`, {
        name: name,
        date: `2024-${month}-${day}`,
      })
      .then(() => {
        // getCustomers();
        // setMonth("")
        // setDay("")
        // router.push('/customers')
        setName("")
      });
  };


    return (
        <>
        
        
       
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
     
      <Button className="mt-15" label="رجوع" onClick={()=>{
            router.push('/customers')
        }} />

      </>
    )
}