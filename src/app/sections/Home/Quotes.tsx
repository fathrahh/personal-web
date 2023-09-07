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
    <section className="mt-8 py-12 px-6 md:py-16 md:mt-16 flex flex-col items-center w-full rounded-xl bg-gray-900">
      <div
        className={cn(
          merriweather.className,
          "max-w-sm  md:max-w-2xl selection:text-pink-400  text-white "
        )}
      >
        <blockquote className={"text-xl md:text-4xl font-bold"}>
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand
        </blockquote>
        <cite className={"mt-3"}>Martin Fowler</cite>
      </div>
    </section>
  );
}
