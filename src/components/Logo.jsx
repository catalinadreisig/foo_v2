import Image from "next/image";
import Link from "next/link";
import fooHvid from "../app/imgs/foohvid.png";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link className="max-h-1" href="/">
        <Image src={fooHvid} alt="Logo" className="relative w-8/12" />
      </Link>
    </>
  );
}
