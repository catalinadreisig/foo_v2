"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Lines from "./Lines";
import { Slant as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="w-full h-20 sticky top-0 pt-16 text-links">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#FFF"
            size={48}
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="fixed top-0 left-0 w-full h-full bg-fooBlue hidden">
              <ul className="md:flex gap-x-6 text-white uppercase pt-5 ">
                <li>
                  <Link href="/artist">
                    <p className="hover:underline">artists</p>
                  </Link>
                </li>
                <li>
                  <Link href="/program">
                    <p className="hover:underline">program</p>
                  </Link>
                </li>
                <li>
                  <Link href="/ticket">
                    <p className="hover:underline">tickets</p>
                  </Link>
                </li>
              </ul>
            </div>
          </Hamburger>
        </div>
      </div>
      <Lines className="pt-10" />
    </div>
  );
};

export default Navbar;
