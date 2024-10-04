import { useEffect, useState } from "react";

export default function Home() {
  
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
