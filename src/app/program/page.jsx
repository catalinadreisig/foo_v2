"use client";
import { useState, useRef, useEffect } from "react";
import CardProgram from "../../components/CardProgram";
import Lines from "../../components/Lines";

export default function Program() {
  const [midgard, setMidgard] = useState([]);
  const [vanaheim, setVanaheim] = useState([]);
  const [jotunheim, setJotunheim] = useState([]);
  const [day, setDay] = useState("mon");

  async function fetchData(parm) {
    const response = await fetch("http://localhost:8080/schedule");
    const data = await response.json();

    setMidgard(data.Midgard[parm]);
    setVanaheim(data.Vanaheim[parm]);
    setJotunheim(data.Jotunheim[parm]);
  }

  useEffect(() => {
    fetchData(day);
  }, [day]);

  return (
    <section className="text-white uppercase text-breads grid">
      <h1 className="text-headers py-10 pt-16 justify-self-end">program</h1>

      <div className="flex justify-center flex-wrap pt-6 gap-2 md:gap-14 md:text-links ">
        <button className="uppercase hover:underline" onClick={() => setDay("mon")}>
          Monday
        </button>
        <p className="md:hidden"> // </p>
        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("tue");
          }}
        >
          Tuesday
        </button>
        <p className="md:hidden"> // </p>
        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("wed");
          }}
        >
          Wednesday
        </button>
        <p className="md:hidden"> // </p>
        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("thu");
          }}
        >
          Thursday
        </button>
        <p className="md:hidden"> // </p>
        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("fri");
          }}
        >
          Friday
        </button>
        <p className="md:hidden"> // </p>
        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("sat");
          }}
        >
          Saturday
        </button>
        <p className="md:hidden"> // </p>
        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("sun");
          }}
        >
          Sunday
        </button>
      </div>

      <h1 className="justify-self-center pt-12 pb-8 text-links md:text-headers">{day}</h1>

      <Lines />

      <div className="text-mini pt-10 grid grid-cols-4 gap-2 md:gap-[12.5rem] md:text-links ">
        <h2>Time</h2>
        <h2>Midgard</h2>
        <h2>Vanaheim</h2>
        <h2>Jotunheim</h2>
      </div>

      <article className="text-mini pt-4 gap-2 grid grid-cols-4 md:pt-10 md:gap-44 md:text-breads">
        <div>
          {midgard.map((time) => {
            return (
              <>
                <div key={time.start} className="grid py-4 md:py-3.5 ">
                  <p className="">{time.start}</p>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {midgard.map((act) => {
            return <CardProgram key={act.start} data={act} />;
          })}
        </div>
        <div>
          {vanaheim.map((act) => {
            return <CardProgram key={act.start} data={act} />;
          })}
        </div>

        <div>
          {jotunheim.map((act) => {
            return <CardProgram key={act.start} data={act} />;
          })}
        </div>
      </article>
    </section>
  );
}
