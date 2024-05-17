import React from "react";

export default function Lines() {
  return (
    <div className="grid grid-cols-2 pt-10">
      <div className="w-full pt-10">
        <hr className="bg-white h-1 border-0 w-6/12" />
      </div>
      <div className="w-full">
        <hr className="bg-white h-1 border-0 justify-end" />
      </div>
    </div>
  );
}
