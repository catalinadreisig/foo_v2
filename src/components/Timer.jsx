"use client";
import { useState, useEffect } from "react";
export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(10);
  const [timeOut, setTimeOut] = useState(false);

  const displaySeconds = seconds % 60;
  const displayMinutes = Math.floor(seconds / 60);

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setTimeout(() => {
        setSeconds((o) => o - 1);
      }, 1000);
    } else {
      setTimeOut(true);
      return clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div>
      {timeOut && <p>Din tid er udløbet</p>}
      <p className="text-bold text-lg text-bgprim">
        Time to complete {displayMinutes}:{displaySeconds}
      </p>
    </div>
  );
}
