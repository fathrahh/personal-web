"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

import { Navlinks } from "@/constans";
import { cn } from "@/utils/helper";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn("h-16 flex justify-center items-center bg-white z-20", {
        "lg:fixed lg:left-0 lg:top-0 w-full": pathname === "/me",
      })}
    >
      <ul className="inline-flex gap-7 rounded-md">
        {Navlinks.map((link) => (
          <Link key={link.to} href={link.to} passHref>
            <li className="font-semibold text-lg relative">
              {pathname === link.to && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 rounded-full left-0 bg-black w-full h-1"
                />
              )}
              {link.text}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
