import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-screen px-24 absolute top-0 left-0 bg-backgroundColorDark z-[99]">
      <div className="h-20 flex flex-row gap-40 w-full justify-between items-center">
        {/* Logo/Icon */}
        <Link href="/" className="flex items-center gap-2 px-6 py-2">
          <h1 className="text-3xl gradient-linear-primary-secondary-text font-extrabold ml-4">
            ITIBA
          </h1>
        </Link>

        {/* Navbar Links */}
        <ul className="list-none flex flex-row gap-24 grow">
          <li className="text-xl font-medium cursor-pointer">
            <Link href="/marketplace">
              <p className="text-2xl font-bold">Marketplace</p>
            </Link>
          </li>
          <li className="text-xl font-medium cursor-pointer">
            <Link href="/create-tba">
              <p className="text-2xl font-bold">Create TBA</p>
            </Link>
          </li>
        </ul>

        {/* Connect Button */}
        {/* <ConnectButton /> */}
        <p className="bg-primary text-2xl text-textPrimary text-center py-1 px-4 rounded-md">
          Connect
        </p>
      </div>
    </nav>
  );
};

export default Navbar;