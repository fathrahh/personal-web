import Image from "next/image";

import TelkomImg from "@/assets/telkom-indonesia.png";
import Dashboard from "@/assets/dashboard.png";
import { button } from "@/components/Button";

import Iconify from "@/components/Iconify";
import { cn } from "@/utils/helper";

export default function Work() {
  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-6xl text-center font-bold">
        Experiences 🍋
      </h2>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 md:col-span-8 rounded-md shadow-md p-8 pb-0 bg-[#EAEFF5] overflow-hidden group">
          <Image src={TelkomImg} height={40} alt="telkom-indonesia" />
          <p className="text-3xl md:text-5xl font-bold w-4/5 mt-8">
            Dashboard For Managing Your Data
          </p>
          <p className="mt-4 text-sm text-[#A6A9AD] w-5/6">
            I have experience in developing UI for dashboard applications, where
            the dashboard includes various types of charts. I also have
            experience in connecting the application to APIs.
          </p>
          <div className="mt-6 p-2 rounded-md bg-white  translate-y-8 md:translate-y-16 group-hover:translate-y-0 transition-all">
            <div className="flex gap-1 ">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-300" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="p-2 ">
              <Image className="w-full" src={Dashboard} alt="dashboard" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
          <div className="bg-[#00317A] rounded-md p-8 relative">
            <div className="absolute w-16 h-16 bg-gradient-radial from-#2a528d to-#173c73 top-0 lef-0 z-10" />
            <p className="text-5xl font-bold text-white">
              Working Closely with UI/UX
            </p>
            <p className="text-[#607EAC] text-sm mt-4">
              I have valuable experience working closely with UI/UX teams in
              previous projects. I actively collaborate with designers to ensure
              that the user interface designs not only look aesthetically
              appealing but also prioritize an excellent user experience.
              {/* I am
              always ready to receive input and feedback from the UI/UX team,
              and I work diligently to incorporate necessary changes to ensure
              the final product meets high standards in terms of both appearance
              and user experience. */}
            </p>
          </div>
          <div className="flex-1 p-8 bg-[#1272F1] rounded-md">
            <p className="text-5xl  font-bold text-white">No Problem!</p>
            <p className="text-white text-sm mt-4">
              I have experience working with a wide variety of protocols. I have
              consumed data from REST, GraphQL, and WebSockets.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 p-8 rounded-md bg-yellow-300  shadow-md">
          <h3 className="text-3xl font-bold text-black">
            No Limitation Any Framework
          </h3>
          <div className="flex gap-2 text-2xl mt-5">
            <Iconify icon={"logos:typescript-icon"} />
            <Iconify icon={"devicon:react"} />
            <Iconify icon={"teenyicons:nextjs-outline"} />
            <Iconify icon={"devicon:tailwindcss"} />
            <Iconify icon={"logos:go"} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 p-8 bg-black text-white rounded-md relative z-20">
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
            See Also My
            <Iconify className="ml-2" icon="bi:github" />
          </a>
          <Iconify
            className="ml-2 absolute -z-10 -translate-y-1/2 top-1/2 opacity-50"
            fontSize={150}
            icon="bi:github"
          />
        </div>
      </div>
    </section>
  );
}
