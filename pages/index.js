import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3000/api/customers")
      .then((res) => res.json())
      .then((res) => {
        // console.log(new Date(res[0].date))
        const dateObject = new Date();
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        console.log("اليوم: " + day);
        console.log("الشهر: " + month);
        console.log("السنة: " + year);
      });
  }, []);
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  return (
    <>
      <form>
        <div>
          <label>الاسم :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>التاريخ :</label>
          <div>
            <label>اليوم :</label>
            <input
              type="text"
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
            <label>الشهر :</label>
            <input
              type="text"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
            <label>السنة :</label>
            <input
              type="text"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
}
