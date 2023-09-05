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
    <section className="py-16 my-16 flex flex-col items-center w-full rounded-xl bg-gray-900">
      {/* <div className="w-full flex items-center">
        <hr className="flex-1" />
        <h3 className="px-7 border-x-[1px] border-custom-outline">
          🚀 MY CRAFT
        </h3>
        <hr className="flex-1" />
      </div> */}
      {/* Quote */}
      <div className="max-w-2xl selection:text-pink-400">
        <blockquote
          className={cn(
            merriweather.className,
            "relative text-4xl h-max before:content-['\\201C'] before:absolute before:text-8xl before:-top-8 before:-left-20 before:text-gray-800 after:content-['\\201D'] after:absolute after:text-8xl after:-bottom-20 after:-right-20 after:text-gray-800 text-white font-bold "
          )}
        >
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand
        </blockquote>
        <cite
          className={cn(
            merriweather.className,
            "before:h-[3px] before:w-28 before:bg-white before:content-[''] before:self-center before:inline-block before:rounded-lg before:mr-3 inline-flex mt-3 text-white"
          )}
        >
          Martin Fowler
        </cite>
      </div>
    </section>
  );
}
