"use client";
import React from "react";
import { useState, useEffect } from "react";
import Lines from "../../components/Lines";
import TestButton from "../../components/TestButton";

export default function ticket() {
  const [regTickets, setRegTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [tent1, setTent1] = useState(0);
  const [tent2, setTent2] = useState(0);

  const [campSitePick, setCampSitePick] = useState();
  const [totalPrice, setTotalPrice] = useState(99);
  const [availableSpots, setAvailableSpots] = useState();
  const [resId, setResId] = useState();
  const [info, setInfo] = useState();
  const [oldValue] = useState();

  const [greenOpt, setGreenOpt] = useState(false);

  const [bookingInfo, setBookingInfo] = useState({});

  async function fetchData(camping) {
    const response = await fetch("localhost:8080/available-spots");
    const data = await response.json();
  }

  function pickSite(e) {
    setCampSitePick(e.target.value);
  }

  return (
    <section className="text-breads text-white uppercase">
      <section>
        <h1 className="text-headers pt-16 justify-self-end">Tickets</h1>
        <div className="flex">
          <p className="justify-self-end">regular tickets</p>
          <button
            onClick={() => {
              setRegTickets((o) => o - 1);
            }}
          >
            -
          </button>
          <p>{regTickets}</p>
          <button
            onClick={() => {
              setRegTickets((o) => o + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="flex">
          <p className="justify-self-end">vip tickets</p>
          <button
            onClick={() => {
              setVipTickets((o) => o - 1);
            }}
          >
            -
          </button>
          <p>{vipTickets}</p>
          <button
            onClick={() => {
              setVipTickets((o) => o + 1);
            }}
          >
            +
          </button>
        </div>

        <Lines />

        <div>
          <h1 className="text-headers pt-8 justify-self-end">Camping</h1>
          <p>where you stayin'?</p>

          <div className="grid grid-cols-2 pt-5">
            <input type="radio" name="camps" value="Svartheim" onChange={pickSite}></input>
            <div className="col-start-2">
              <p>Svartheim</p>
              <p>available</p>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-5">
            <input type="radio" name="camps" value="Nilfheim" onChange={pickSite}></input>
            <div className="col-start-2">
              <p>Nilfheim</p>
              <p>available</p>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-5">
            <input type="radio" name="camps" value="Helheim" onChange={pickSite}></input>
            <div className="col-start-2">
              <p>Helheim</p>
              <p>available</p>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-5">
            <input type="radio" name="camps" value="Muspelheim" onChange={pickSite}></input>
            <div className="col-start-2">
              <p>Muspelheim</p>
              <p>available</p>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-5">
            <input type="radio" name="camps" value="Alfheim" onChange={pickSite}></input>
            <div className="col-start-2">
              <p>Alfheim</p>
              <p>available</p>
            </div>
          </div>

          <p>{campSitePick}</p>
        </div>
      </section>

      <Lines />

      <section>
        <article>
          <div>
            <h1 className="text-headers pt-8 justify-self-end">choose tents</h1>
            <p className="text-links">want a tend with that?</p>
            <div className="flex gap-x-3">
              <p> 2 person tent (including the tent) 299DKK</p>
              <button
                onClick={() => {
                  setTent1((o) => o - 1);
                }}
              >
                -
              </button>
              <p>{tent1}</p>
              <button
                onClick={() => {
                  setTent1((o) => o + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="flex gap-x-3">
              <p> 3 person tent (including the tent) 399DKK</p>
              <button
                onClick={() => {
                  setTent2((o) => o - 1);
                }}
              >
                -
              </button>
              <p>{tent2}</p>
              <button
                onClick={() => {
                  setTent2((o) => o + 1);
                }}
              >
                +
              </button>
            </div>
          </div>

          <Lines />

          <div>
            <h1 className="text-headers pt-8 justify-self-end">cart</h1>
            <p>//show cart here//</p>
          </div>

          <Lines />

          <div>
            <h1 className="text-headers pt-8 justify-self-end">info</h1>
          </div>

          <Lines />

          <div>
            <h1 className="text-headers pt-8 justify-self-end">payment</h1>
          </div>
        </article>
      </section>
    </section>
  );
}
