import React from "react";

export default function TestButton({ setRegTickets }) {
  return (
    <button
      onClick={() => {
        setRegTickets((o) => o + 1);
      }}
    >
      +
    </button>
  );
}
