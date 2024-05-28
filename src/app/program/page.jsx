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

      <div className="flex justify-center flex-wrap gap-14 pt-6 text-links">
        <button className="uppercase hover:underline" onClick={() => setDay("mon")}>
          Monday
        </button>

        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("tue");
          }}
        >
          Tuesday
        </button>

        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("wed");
          }}
        >
          Wednesday
        </button>

        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("thu");
          }}
        >
          Thursday
        </button>

        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("fri");
          }}
        >
          Friday
        </button>

        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("sat");
          }}
        >
          Saturday
        </button>

        <button
          className="uppercase hover:underline"
          onClick={() => {
            setDay("sun");
          }}
        >
          Sunday
        </button>
      </div>

      <h1 className="justify-self-center pt-12 pb-8 text-headers">{day}</h1>

      <Lines />

      <div className="grid grid-cols-4 pt-10 text-links gap-[12.5rem]">
        <h2>Time</h2>
        <h2>Midgard</h2>
        <h2>Vanaheim</h2>
        <h2>Jotunheim</h2>
      </div>

      <article className=" pt-10 grid grid-cols-4 gap-44">
        <div>
          {midgard.map((time) => {
            return (
              <>
                <div key={time.start} className=" py-3 grid">
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
