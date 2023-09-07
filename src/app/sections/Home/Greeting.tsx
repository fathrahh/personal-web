"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button, { button } from "@/components/Button";
import Iri from "@/assets/iri.png";
import Wave from "@/assets/Wave";
import Iconify from "@/components/Iconify";

export default function Greeting() {
  return (
    <section className="md:mx-14 py-8 flex flex-col md:flex-row gap-20 px-16 overflow-hidden relative min-h-[calc(100vh_-_8rem)] rounded-3xl items-center ">
      <Wave
        className="rotate-45 absolute -translate-y-96 -translate-x-3/4 -z-10 top-0 left-0 text-[#DEFF99]/60 scale-[200%]"
        width={800}
        height={800}
      />
      <div className="bg-[#DEFF99] blur-[100px] aspect-[6/5] w-[641px] -translate-y-1/2 -translate-x-1/2 rounded-full absolute -z-20 opacity-50 mix-blend-multiply" />
      <div className="bg-[#E4ECFF] blur-[100px] aspect-[6/5] w-[641px] bottom-0 translate-y-1/2 -translate-x-1/2  rounded-full absolute opacity-50" />
      <div className="bg-[#FFE3E3] blur-[100px] aspect-[6/5] w-[641px] right-0 bottom-0 translate-y-1/4 translate-x-3/4  rounded-full absolute opacity-50" />
      <div className="font-semibold flex-1 order-2 md:order-1 flex flex-col items-end">
        <div className="max-w-xl flex flex-col">
          <h4 className="text-lg md:text-3xl capitalize">
            Welcome to my labs 🧪
          </h4>
          <h2 className="text-5xl md:text-6xl tracking-tight mt-3">
            I`m Fathur ! a
          </h2>
          <div className="flex items-center gap-3 mt-1">
            <div className=" bg-[#7390F9] flex justify-center px-3 py-1 items-center text-white font-bold rounded-2xl">
              Frontend
            </div>
            <span className="text-2xl">developer</span>
          </div>
          {/* <span className="mt-10 text-xl font-medium text-custom-blue-accent">
            gazoon3@gmail.com
          </span> */}
          <div className="flex gap-3 mt-4 md:mt-9">
            <a
              href="https://wa.me/6281280292017"
              target="_blank"
              className={button()}
            >
              Connect Me
              <Iconify icon="mdi:fire" className="ml-1" />
            </a>
            <a
              href="/Resume-Muhammad_Fathurrahman.pdf"
              className={button({ variant: "orange" })}
              download
            >
              Resume
              <Iconify icon="mdi:fire" className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex-1 flex order-1 md:order-2 items-center">
        <div className="relative bg-white/40 backdrop-blur">
          <div className="aspect-[4/5] relative w-52 lg:w-96">
            <Image src={Iri} alt="pict" fill />
          </div>
          <div className="bg-[#F5EFFF]/60 blur-sm absolute inset-0 w-full h-full rounded-3xl -z-10 mix-blend-multiply" />
          <div className="bg-[#7390F9] aspect-square rounded-full w-80 blur-[100px] -z-20 absolute -bottom-5 -left-5" />
        </div>
      </div>
    </section>
  );
}
