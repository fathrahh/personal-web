import { cn } from "@/utils/helper";
import { Merriweather, Special_Elite } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic",
});

// const specialElite = Special_Elite({
//   subsets: ["latin"],
//   weight: ["400"],
//   style: "normal",
// });

export default function Quotes() {
  return (
    <section className="py-16 mt-16 flex flex-col items-center w-full rounded-xl bg-gray-900">
      {/* <div className="w-full flex items-center">
        <hr className="flex-1" />
        <h3 className="px-7 border-x-[1px] border-custom-outline">
          🚀 MY CRAFT
        </h3>
        <hr className="flex-1" />
      </div> */}
      {/* Quote */}
      <div
        className={cn(
          merriweather.className,
          "max-w-2xl selection:text-pink-400 text-white"
        )}
      >
        <blockquote className={"text-4xl h-max font-bold"}>
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand
        </blockquote>
        <cite className={"mt-3"}>Martin Fowler</cite>
      </div>
    </section>
  );
}
