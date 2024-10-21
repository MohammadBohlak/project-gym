import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { url } from "..";
import { useRouter } from "next/router";
import { InputNumber } from "primereact/inputnumber";
import { useLoader } from "@/hook/useLoader";
import Layout from "@/pages/component/Layout";

export default function addCustomer() {
  const { loader, setLoader } = useLoader();
    const router = useRouter();
    const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader("visible");
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
      }).finally(() => {
        setLoader("hidden");
      });;
  };


    return (
        <Layout visible={loader} >
        
        
       
        <form className="flex flex-column mb-2">
        <div className="p-inputgroup flex mb-2">
          <InputText
            placeholder="الاسم"
            value={name}
            onChange={(e) => {
              // console.log(e)
              setName(e.target.value);
            }}
          />
          {/* <InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} /> */}

        </div>
        {/* <span className="pi pi-search"></span> */}

        <div className="p-inputgroup mb-2">
          <InputNumber
            className="w-5 ml-2"
            useGrouping={false}
            placeholder="اليوم"
            value={day}
            onChange={(e) => {
              setDay(e.value);
              // console.log(day)
            }}
          />
          <InputNumber
            className="w-5"
            useGrouping={false}
            placeholder="الشهر"
            value={month}
            onChange={(e) => {
              setMonth(e.value);
            }}
          />
        </div>
        <Button label="إضافة" onClick={handleSubmit} />

        
      </form>
     
      <Button className="mt-15" label="رجوع" onClick={()=>{
            router.push('/customers')
        }} />

      </Layout>
    )
}