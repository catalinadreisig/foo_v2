"use client";
import { useState, useRef, useEffect } from "react";

export default function Program() {
  const [midgard, setMidgard] = useState([]);
  const [vanaheim, setVanaheim] = useState([]);
  const [jotunheim, setJotunheim] = useState([]);
  const [day, setDay] = useState("mon");

  async function fetchData(parm) {
    const response = await fetch("http://localhost:8080/bands");
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
      <h1 className="text-headers py-8 pt-16 justify-self-end">program</h1>
    </section>
  );
}
