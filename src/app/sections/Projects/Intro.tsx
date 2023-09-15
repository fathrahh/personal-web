import Image from "next/image";
import Link from "next/link";

export interface IntroProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  children?: React.ReactNode;
}

export default function Inro({
  subtitle,
  title,
  imgSrc,
  children,
}: IntroProps) {
  return (
    <section
      className={`w-full relative h-96 px-8 py-6 text-white grid place-items-center rounded-lg overflow-hidden group`}
    >
      <div className="absolute w-full h-full inset-0 pointer-events-none object-cover">
        <div className="absolute inset-0 w-full h-full -z-10 bg-black/70 group-hover:bg-black/80 transition-all " />
        <Image
          className="-z-20 object-cover group-hover:scale-105 transition-all"
          src={imgSrc}
          alt="bg"
          fill
        />
      </div>
      <div>
        <h2 className="text-2xl lg:text-4xl text-gray-100 font-bold">
          {title}
        </h2>
        <div
          className="mt-4 max-w-4xl text-base text-gray-100"
          dangerouslySetInnerHTML={{
            __html: subtitle,
          }}
        />
        {children}
      </div>
    </section>
  );
}
