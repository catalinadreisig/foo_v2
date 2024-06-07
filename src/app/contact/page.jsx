import React from "react";
import Lines from "../../components/Lines";

export default function contact() {
  return (
    <section className="text-breads text-white uppercase ">
      <h1 className="text-headers pt-20 pb-10 text-end ">contact</h1>
      <p className="text-links text-end">reach the foos @</p>
      <Lines />
      <div className="pb-6 md:grid md:grid-cols-3">
        <h1 className="text-links pt-20 text-start ">phonenumber</h1>
        <h1 className="text-links pt-20 text-center ">mail</h1>
        <h1 className="text-links pt-20 text-end">adress</h1>
      </div>
      <div className="md:grid md:grid-cols-3 ">
        <a className="text-start" href="tel:+4526707787">
          +4526707787
        </a>
        <a className="text-center" href="mailto:+estherfinsen@gmail.com">
          foo@foo.dk
        </a>
        <p className="text-end">foo street 12, 3450 foo city</p>
      </div>
    </section>
  );
}
