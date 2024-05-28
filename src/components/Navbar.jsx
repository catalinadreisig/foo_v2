import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Lines from "./Lines";

const Navbar = () => {
  return (
    <div className="w-full h-20 sticky top-0 pt-16 text-links">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <Lines />
          <ul className="hidden md:flex gap-x-6 text-white uppercase pt-5">
            <li>
              <Link href="/artist">
                <p>artists</p>
              </Link>
            </li>
            <li>
              <Link href="/program">
                <p>program</p>
              </Link>
            </li>
            <li>
              <Link href="/ticket">
                <p>tickets</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Lines className="pt-10" />
    </div>
  );
};

export default Navbar;
