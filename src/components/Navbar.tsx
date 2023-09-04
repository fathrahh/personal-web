"use client";

import { usePathname } from "next/navigation";
import NavLink from "./Navlink";
import Link from "next/link";

import { AUTHOR, Navlinks } from "@/constans";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="pt-10 flex justify-center items-center">
      <ul className="inline-flex gap-7 bg-emerald-100 p-2 rounded-md">
        {Navlinks.map((link) => (
          <Link key={link.to} href={link.to} passHref>
            <li className="font-semibold text-lg text-white drop-shadow-[0_1.2px_1.2px_#414243]">
              {link.text}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
