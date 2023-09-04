import Image from "next/image";

import Button, { button } from "@/components/Button";
import Iri from "@/assets/iri.png";
import Iconify from "@/components/Iconify";

export default function Greeting() {
  return (
    <section className="mx-14 flex gap-20 px-16 overflow-hidden relative h-[calc(100vh_-_8rem)] rounded-3xl items-center ">
      <div className="bg-[#DEFF99] blur-[100px] aspect-[6/5] w-[641px] -translate-y-1/2 -translate-x-1/2 rounded-full absolute -z-10 opacity-50" />
      <div className="bg-[#E4ECFF] blur-[100px] aspect-[6/5] w-[641px] bottom-0 translate-y-1/2 -translate-x-1/2  rounded-full absolute opacity-50" />
      <div className="bg-[#FFE3E3] blur-[100px] aspect-[6/5] w-[641px] right-0 bottom-0 translate-y-1/4 translate-x-3/4  rounded-full absolute opacity-50" />
      <div className="font-semibold flex-1 flex flex-col items-end">
        <div className="max-w-xl flex flex-col">
          <h4 className="text-3xl">Hello, Dirty Hand!!!</h4>
          <h2 className="text-6xl mt-3">I`m Fathur ! a</h2>
          <div className="flex items-center gap-3">
            <div className="bg-[#7390F9] px-4 py-2 flex justify-center items-center text-white font-bold aspect-square rounded-2xl">
              FE
            </div>
            <span className="text-5xl">developer</span>
          </div>
          <span className="mt-10 text-3xl font-medium text-custom-blue-accent">
            gazoon3@gmail.com
          </span>
          <div className="flex gap-3 mt-9">
            <a
              href="https://wa.me/6281280292017"
              target="_blank"
              className={button()}
            >
              Connect Me
              <Iconify icon="mdi:fire" className="ml-1" />
            </a>
            <Button variant={"orange"}>
              Resume
              <Iconify icon="mdi:fire" className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full flex items-center">
        <div className="relative  bg-white/40 backdrop-blur">
          <Image src={Iri} alt="pict" height={500} />
          <div className="bg-[#F5EFFF]/60 blur-sm absolute inset-0 w-full h-full rounded-3xl -z-10 mix-blend-multiply" />
          <div className="bg-[#7390F9] aspect-square rounded-full w-80 blur-[100px] -z-20 absolute -bottom-5 -left-5" />
        </div>
      </div>
    </section>
  );
}