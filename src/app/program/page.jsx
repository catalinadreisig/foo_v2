"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Program() {
  const data = fetch("http://localhost:8080/schedule");
  const [midgard, setMidgard] = useState([]);
  const [vanaheim, setVanaheim] = useState([]);
  const [jotunheim, setJotunheim] = useState([]);
  const [day, setDay] = useState("mon");

  async function fetchData(parm) {
    setMidgard(data.Midgard[parm]);
    setVanaheim(data.Vanaheim[parm]);
    setJotunheim(data.Jotunheim[parm]);
  }
  useEffect(() => {
    fetchData(day);
  }, []);

  return (
    <section>
      <h1 className="text-white uppercase text-headers py-8 pt-16 justify-self-end">program</h1>
      <Link className="grid place-items-center" href={`/artist/${midgard.mon}`}>
        <h1 className="col-start-1 row-start-1">hey</h1>
        <h1 className="col-start-1 row-start-1">FRIDAY AT 07:45PM</h1>
        <h1>BLUE SCENE</h1>
      </Link>
    </section>
  );
}
