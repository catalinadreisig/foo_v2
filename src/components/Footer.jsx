import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Lines from "./Lines";
import face from "../app/imgs/face.png";
import insta from "../app/imgs/insta.png";

const Navbar = () => {
  return (
    <div className="w-full text-links">
      <Lines className="pt-0" />
      <div className="grid grid-cols-2 gap-x-2 py-12 px-20">
        <div className="w-6/12 grid grid-cols-3 self-center">
          <Logo />

          <Link href="/">
            <Image className="w-6/12" src={face} alt="face" />
          </Link>

          <Link href="/">
            <Image className="w-6/12" src={insta} alt="insta" />
          </Link>
        </div>
        <ul className="grid grid-rows-3 justify-end mr-0 text-white uppercase gap-y-3">
          <li className="place-self-end">
            <Link href="/">
              <p>about</p>
            </Link>
          </li>
          <li className="place-self-end">
            <Link href="/">
              <p>contact</p>
            </Link>
          </li>
          <li className="place-self-end">
            <Link href="/ticket">
              <p>buy ticket</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
