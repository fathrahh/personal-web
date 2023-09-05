import Image from "next/image";

import TelkomImg from "@/assets/telkom-indonesia.png";
import Dashboard from "@/assets/dashboard.png";
import { button } from "@/components/Button";

import Iconify from "@/components/Iconify";
import { cn } from "@/utils/helper";

export default function Work() {
  return (
    <section className="py-16">
      <h2>Experiences</h2>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8 rounded-md shadow-md p-8 bg-[#EAEFF5]">
          <Image
            src={TelkomImg}
            height={40}
            className="mix-blend-color-burn"
            alt="telkom-indonesia"
          />
          <p className="text-5xl font-bold w-4/5 mt-8">
            Dashboard For Managing Your Data
          </p>
          <p className="mt-4 text-sm text-[#A6A9AD] w-5/6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            corporis iure labore omnis iste eaque a nisi officia veniam
            distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos perferendis odio odit vero cumque dolor, iure, dignissimos,
            veniam rerum totam ullam! Aut !
          </p>
          <div className="mt-6 p-2 rounded-md bg-white">
            <div className="flex gap-1 ">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-300" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="p-2">
              <Image
                className="w-full"
                objectFit="contain"
                src={Dashboard}
                alt="dashboard"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-3">
          <div className="bg-[#00317A] rounded-md p-8 ">
            <p className="text-5xl font-bold text-white">
              Working Closely with UI/UX
            </p>
            <p className="text-[#607EAC] text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium inventore voluptas eveniet quisquam tempora? Esse
              asperiores exercitationem similique obcaecati odio.
            </p>
          </div>
          <div className="flex-1 p-8 bg-[#1272F1] rounded-md">
            <p className="text-5xl  font-bold text-white">No Problem!</p>
            <p className="text-white text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium inventore voluptas eveniet quisquam tempora? Esse
              asperiores exercitationem similique obcaecati odio.
            </p>
          </div>
        </div>
        <div className="col-span-12 p-8 bg-black text-white rounded-md">
          <h3 className="text-4xl font-bold">Colaboration With Team ?</h3>
          <p className="mt-4 w-5/6">
            I&lsquo;m an experienced team player proficient in Atlassian, Git,
            GitHub, and Notion. These tools are my go-to for efficient project
            planning, code management, and seamless collaboration. Let&lsquo;s
            turn ideas into reality together!
          </p>
          <a
            href={"https://github.com/fathrahh"}
            target="_blank"
            className={cn("mt-6", button({ variant: "light" }))}
          >
            <span>See Also My</span>
            <Iconify className="ml-2" icon="bi:github" />
          </a>
        </div>
      </div>
    </section>
  );
}
