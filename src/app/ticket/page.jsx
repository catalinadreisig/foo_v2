"use client";
import React from "react";
import { useState, useEffect } from "react";
import Lines from "../../components/Lines";
import Timer from "../../components/Timer";
import { supabaseUrl, supabaseKey } from "../../lib/setttings.js";
import { redirect } from "next/navigation";

export default function Ticket() {
  const [regTickets, setRegTickets] = useState(0);
  const [vipTickets, setVipTickets] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [campSitePick, setCampSitePick] = useState("");
  const [totalTents, setTotalTents] = useState(0);
  const [tent1, setTent1] = useState(0);
  const [tent2, setTent2] = useState(0);
  const [green, setGreen] = useState(false);
  const [availability, setAvailability] = useState([]);
  const [reservationId, setReservationId] = useState(false);
  const [resId, setResId] = useState();
  const [totalPrice, setTotalPrice] = useState(99);
  const [newPage, setNewPage] = useState(false);

  //might use:
  const [oldValue] = useState();
  const [bookingInfo, setBookingInfo] = useState({});
  const [info, setInfo] = useState();

  async function getAvailability() {
    const res = await fetch("https://mature-insidious-monitor.glitch.me/available-spots");
    const availability = await res.json();
    setAvailability(availability);
  }
  useEffect(() => {
    getAvailability();
  }, []);
  console.log(availability);
  function pickSite(e) {
    setCampSitePick(e.target.value);
  }

  useEffect(() => {
    setTotalPrice(() => {
      if (green && tent1 && tent2) {
        const newPrice = 99 + regTickets * 799 + vipTickets * 1299 + 249 + tent1 * 299 + tent2 * 399;
        return newPrice;
      }
      if (green) {
        const newPrice = 99 + regTickets * 799 + vipTickets * 1299 + 249;
        return newPrice;
      }
      if (tent1 && tent2) {
        const newPrice = 99 + regTickets * 799 + vipTickets * 1299 + tent1 * 299 + tent2 * 399;
        return newPrice;
      }
      const newPrice = 99 + regTickets * 799 + vipTickets * 1299;
      return newPrice;
    });
  }, [regTickets, vipTickets, green, tent1, tent2]);

  function makeReservation() {
    setReservationId(true);
    getReservation();
  }

  async function getReservation() {
    const response = await fetch("https://mature-insidious-monitor.glitch.me/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: campSitePick,
        amount: regTickets,
      }),
    });

    const data = await response.json();
    setResId(data.id);
  }

  useEffect(() => {
    setTotalTickets(regTickets + vipTickets);
  }, [regTickets, vipTickets]);

  useEffect(() => {
    setTotalTents(tent1 + tent2);
  }, [tent1, tent2]);

  async function completeReservation(e) {
    e.preventDefault();
    // ^e
    const formData = new FormData(e.target);

    const bookingInfo = {
      name: formData.get("fname"),
      surname: formData.get("lname"),
      email: formData.get("email"),
      phone: formData.get("phonenumber"),
      // Add other relevant reservation details if needed
    };
    await fetch(supabaseUrl, {
      method: "POST",
      //laver objekttil string
      body: JSON.stringify(bookingInfo),
      headers: {
        Accept: "application/json",
        apikey: supabaseKey,
        prefer: "return=representation",
        "Content-Type": "application/json",
      },
    });
    setNewPage(true);
  }
  if (newPage) {
    redirect("/endpage");
  }

  return (
    <section className="text-breads text-white uppercase">
      <section>
        <h1 className="text-headers pt-20 justify-self-end pb-8">Tickets</h1>
        <div className="flex gap-x-3 pb-3 text-links">
          <p>regular tickets 799dkk</p>
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

        <div className="flex gap-x-3 pb-3 text-links">
          <p className="justify-self-end">vip tickets 1299dkk</p>
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
          <p className="text-links py-3 pb-8">where you stayin?</p>

          {availability.map((oneSite) => {
            return (
              <div className="grid grid-cols-2 pt-5" key={oneSite.area}>
                <input type="radio" name="camps" value={`${oneSite.area}`} onChange={pickSite}></input>
                <div className="col-start-2">
                  <p>{oneSite.area}</p>
                  <p>{oneSite.available}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Lines />

      <section>
        <article>
          <div>
            <h1 className="text-headers pt-8 justify-self-end">choose tents</h1>
            <p className="text-links pt-3">want a tent with that?</p>
            <p className="py-3 pb-8">you can only choose up to {totalTickets} tents</p>
            <div className="flex gap-x-3 pb-3">
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
                  if (totalTents < totalTickets) {
                    setTent1((o) => o + 1);
                  }
                }}
                disabled={totalTents >= totalTickets}
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
                  if (totalTents < totalTickets) {
                    setTent2((o) => o + 1);
                  }
                }}
                disabled={totalTents >= totalTickets}
              >
                +
              </button>
            </div>
          </div>
          <Lines />
          <div>
            <h1 className="text-headers py-8 justify-self-end">green camping</h1>
            <div className="flex gap-x-3 pb-3">
              <p> Green camping 249DKK</p>

              <button
                className="uppercase hover:underline"
                type="radio"
                onClick={() => {
                  setGreen(true);
                }}
              >
                add
              </button>
            </div>
          </div>
          <Lines />–
          <div>
            <h1 className="text-headers pt-8 justify-self-end pb-8">cart</h1>
            <div className="grid grid-cols-2 pt-5 align-middle">
              <div>Regular ticket</div>
              <div className="justify-self-end">..... {regTickets}</div>
            </div>

            <div className="grid grid-cols-2 pt-5 align-middle">
              <div>vip ticket</div>
              <div className="justify-self-end">..... {vipTickets}</div>
            </div>

            <div className="grid grid-cols-2 pt-5 align-middle">
              <div>chosen campsite</div>
              <div className="justify-self-end">..... {campSitePick}</div>
            </div>

            <div className="grid grid-cols-2 pt-5 align-middle">
              <div>2 diverson tent</div>
              <div className="justify-self-end">..... {tent1}</div>
            </div>

            <div className="grid grid-cols-2 pt-5 align-middle">
              <div>3 person tent</div>
              <div className="justify-self-end">..... {tent2}</div>
            </div>

            <div className="grid grid-cols-2 pt-5 align-middle">
              <div>Green camping</div>
              <div className="justify-self-end flex gap-x-1">.....{green ? <p>1</p> : <p>0</p>}</div>
            </div>

            <div className="grid grid-cols-2 pt-5 align-middle">
              <div>fixed booking fee</div>
              <div className="justify-self-end">..... 1</div>
            </div>

            <div className="grid grid-cols-2 pt-5 align-middle">
              <div className="align-middle">total price</div>
              <div className="align-middle text-end">..... {totalPrice}</div>
            </div>

            <button className="text-links uppercase pt-8 hover:underline" onClick={makeReservation}>
              looks right?
            </button>
          </div>
          <Lines />
          <h1 className="text-headers pt-8 justify-self-end">info</h1>
          {reservationId && <Timer reservationId={reservationId} />}
          <form onSubmit={completeReservation}>
            <fieldset>
              <div className="grid gap-x-3 py-2">
                <label htmlFor="firstname">first name:</label>
                <input className="text-fooBlue" type="text" name="fname" id="firstname" inputMode="name" />
              </div>

              <div className="grid gap-x-3 py-2">
                <label htmlFor="surname">surname:</label>
                <input className="text-fooBlue" type="text" name="lname" id="surname" inputMode="name" />
              </div>

              <div className="grid gap-x-3 py-2">
                <label htmlFor="email">email:</label>
                <input className="text-fooBlue" type="email" name="email" id="email" inputMode="email" />
              </div>
              <div className="grid gap-x-3 py-2">
                <label htmlFor="phonenumber">phonenumber:</label>
                <input className="text-fooBlue" type="tel" name="phonenumber" id="phonenumber" inputMode="tel" />
              </div>
            </fieldset>

            <Lines />

            <h1 className="text-headers pt-8 justify-self-end">payment</h1>

            <fieldset>
              <div className="grid gap-x-3 py-2">
                <label>registration number:</label>
                <input className="text-fooBlue" type="tel" inputmode="numeric" maxlength="4" id="regnumber" name="regnumber" />
              </div>

              <div className="grid gap-x-3 py-2">
                <label>account number:</label>
                <input className="text-fooBlue" type="text" inputmode="numeric" maxlength="10" id="accnumber" name="accnumber" />
              </div>

              <div className="grid gap-x-3 py-2">
                <label>name on card:</label>
                <input className="text-fooBlue" type="text" id="name" inputMode="name" name="cardname" />
              </div>
              <div className="grid gap-x-3 py-2 pb-10">
                <label>cvc:</label>
                <input className="text-fooBlue" type="text" inputmode="numeric" maxlength="3" name="cvc" id="cvc" />
              </div>
            </fieldset>
            <button className="text-links uppercase justify-self-end hover:underline">complete purchase</button>
          </form>
        </article>
      </section>
    </section>
  );
}
