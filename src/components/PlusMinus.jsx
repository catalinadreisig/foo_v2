import React from "react";

export default function PlusMinus() {
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
    <div className="flex">
      <p className="justify-self-end">vip tickets</p>
      <div classname="grid gap-2">
        <button classlist="text-headers" onClick={oldValue}>
          -
        </button>
        <p>{setVipTickets}</p>
        <button classlist="text-headers" onClick={oldValue}>
          +
        </button>
      </div>
    </div>
  );
}
