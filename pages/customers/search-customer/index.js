import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { url } from "..";


export default function Search(){
    const [search, setSearch] = useState("");
    const router = useRouter();

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        axios.get(`${url}/api/customers`).then((res) => {
          setCustomers(res.data);
        });  }, []);
        let searchCustomer = customers.filter((e) => e.name.includes(search));

    return(
        <>
         <div className="p-inputgroup flex-1 mb-2">
        <InputText
          className="search-input"
          placeholder="بحث"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="rmv-input">
          <button onClick={()=>{
            setSearch("")
            document.querySelector(".search-input").focus()
            }}>
            +
          </button>
        </div>
        {/* <InputText
        type="search"
          placeholder="بحث"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        /> */}

      </div>
      <Button className="mt-15" label="رجوع" onClick={()=>{
            router.push('/customers')
        }} />
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
      
        </>
    )
}