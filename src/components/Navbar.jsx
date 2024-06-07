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
          <div className="z-10">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#FFF" size={48} />
          </div>
          {isOpen && (
            <div className="fixed top-20 right-0 w-6/12 md:w-4/12 h-full bg-fooBlue">
              <ul className=" fixed right-3 text-end text-white uppercase pt-16 ">
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link href="/artist">
                    <p className="hover:underline">artists</p>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
                >
                  <Link href="/program">
                    <p className="hover:underline">program</p>
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
                >
                  <Link href="/ticket">
                    <p className="hover:underline">tickets</p>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
                >
                  <Link href="/contact">
                    <p className="hover:underline">contact</p>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="pt-4"
                >
                  <Link href="/about">
                    <p className="hover:underline">about</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Lines className="pt-10" />
    </div>
  );
};

export default Navbar;
