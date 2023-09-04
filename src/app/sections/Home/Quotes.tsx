export default function Quotes() {
  return (
    <section className="py-16 my-16 flex flex-col items-center w-full bg-gray-50/50">
      {/* <div className="w-full flex items-center">
        <hr className="flex-1" />
        <h3 className="px-7 border-x-[1px] border-custom-outline">
          🚀 MY CRAFT
        </h3>
        <hr className="flex-1" />
      </div> */}
      {/* Quote */}
      <div className="max-w-2xl mt-16">
        <blockquote className="relative text-4xl italic h-max before:content-['\201C'] before:absolute before:text-8xl before:-top-8 before:-left-20 after:content-['\201D'] after:absolute after:text-8xl after:-bottom-16 after:-right-20">
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand
        </blockquote>
        <cite className="before:h-1 before:w-20 before:bg-black before:content-[''] before:inline-block before:mr-3">
          Martin Fowler
        </cite>
      </div>
    </section>
  );
}
