import React from "react";
import Link from "next/link";
import Image from "next/image";
import foohvid from "../imgs/foohvid.png";

export default function EndPage() {
  return (
    <Link className="grid place-items-center" href="/">
      <div className="grid justify-items-center pb-32 pt-20">
        <h1 className="uppercase text-white text-headers py-5 pt-16 justify-center">purchase completed!</h1>
        <h1 className="uppercase text-white text-headers py-5 justify-self-center">see you at</h1>
        <Image src={foohvid} alt="foo" />
      </div>
    </Link>
  );
}
