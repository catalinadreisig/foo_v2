import React from "react";
import Lines from "../../components/Lines";

export default function contact() {
  return (
    <section className="text-breads text-white uppercase ">
      <h1 className="text-headers pt-20 pb-10 text-end ">contact</h1>
      <p className="text-links text-end">reach the foos @</p>
      <Lines />
      <div className="max-md:grid max-md:grid-cols-2 max-md:pt-10">
        <div className="md:pb-6 md:grid md:grid-cols-3">
          <h1 className="text-links md:pt-20 md:text-start max-md:pb-10 ">phonenumber</h1>
          <h1 className="text-links md:pt-20 md:text-center max-md:pb-10 ">mail</h1>
          <h1 className="text-links md:pt-20  md:text-end max-md:pb-10">adress</h1>
        </div>
        <div className="md:grid md:grid-cols-3 max-md:grid">
          <a className="md:text-start max-md:text-end max-md:pb-10" href="tel:+4526707787">
            +4526707787
          </a>
          <a className="md:text-center max-md:text-end max-md:pb-10" href="mailto:+estherfinsen@gmail.com">
            foo@foo.dk
          </a>
          <p className="md:text-end max-md:text-end max-md:pb-10">foo street 12, 3450 foo city</p>
        </div>
      </div>
    </section>
  );
}
