"use client";
import React from "react";
import { useState, useEffect } from "react";
import Lines from "../../components/Lines";

export default function ticket() {
  const [regTickets, setRegTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);

  const [campSitePick, setCampSitePick] = useState();
  const [totalPrice, setTotalPrice] = useState(99);
  const [availableSpots, setAvailableSpots] = useState();
  const [resId, setResId] = useState();
  const [info, setInfo] = useState();
  const [oldValue] = useState();

  const [greenOpt, setGreenOpt] = useState(false);
  const [tents, setTents] = useState();
  const [bookingInfo, setBookingInfo] = useState({});

  async function fetchData(spots) {
    const response = await fetch("localhost:8080/available-spots");
    const data = await response.json();
  }

  function addTicket() {
    setRegTickets((oldValue) => oldValue + 1);
  }
  function removeTicket() {
    setRegTickets((oldValue) => oldValue - 1);
  }
  function addTicket() {
    setVipTickets((oldValue) => oldValue + 1);
  }
  function removeTicket() {
    setVipTickets((oldValue) => oldValue - 1);
  }

  return (
    <section className="text-breads text-white uppercase">
      <section>
        <h1 className="text-headers pt-16 justify-self-end">Tickets</h1>
        <div className="flex">
          <p className="justify-self-end">regular tickets</p>
        </div>
        <div className="flex">
          <p className="justify-self-end">vip tickets</p>
        </div>

        <Lines />

        <div classme="grid">
          <h1 className="text-headers pt-8 justify-self-end">Camping</h1>
          <p>where you stayin'?</p>

          <div className="grid grid-cols-3 pt-5">
            <div className="col-start-1">
              <p>spot</p>
              <p>dataplace</p>
              <p>dataplace</p>
              <p>dataplace</p>
              <p>dataplace</p>
              <p>dataplace</p>
            </div>
            <div className="col-start-2">
              <p>available</p>
              <p>datanumber</p>
              <p>datanumber</p>
              <p>datanumber</p>
              <p>datanumber</p>
              <p>datanumber</p>
            </div>
            <div className="col-start-3">
              <p>choose</p>
              <p>plusminus</p>
              <p>plusminus</p>
              <p>plusminus</p>
              <p>plusminus</p>
              <p>plusminus</p>
            </div>
          </div>
        </div>
      </section>

      <Lines />

      <section>
        <article>
          <div>
            <h1 className="text-headers pt-8 justify-self-end">Choose tents</h1>
            <p>want a tend with that?</p>
          </div>

          <Lines />

          <div>
            <h1 className="text-headers pt-8 justify-self-end">Cart</h1>
            <p>//show cart here//</p>
          </div>

          <Lines />

          <div>
            <h1 className="text-headers pt-8 justify-self-end">info</h1>
          </div>

          <Lines />

          <div>
            <h1 className="text-headers pt-8 justify-self-end">Payment</h1>
          </div>
        </article>
      </section>
    </section>
  );
}
