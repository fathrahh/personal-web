import Background from "@/assets/images/racing-car.png";
import Image from "next/image";
import Link from "next/link";

export default function Inro() {
  console.log(Background);

  return (
    <section
      className={`w-full relative h-96 px-8 py-6 text-white grid place-items-center rounded-lg overflow-hidden`}
    >
      <div className="absolute w-full h-full inset-0 group">
        <div className="absolute inset-0 w-full h-full -z-10 bg-black/75 group-hover:bg-black/80 transition-all duration-200" />
        <Image
          className="-z-20"
          src={Background}
          fill
          alt="bg"
          objectFit="cover"
        />
      </div>
      <div>
        <h2 className="text-2xl lg:text-4xl text-gray-100 font-bold">
          Pembuatan Game Tiktok Live Berbasis Web
        </h2>
        <p className="mt-4 max-w-4xl text-base text-gray-100">
          Aplikasi ini terdiri dari dua game yaitu{" "}
          <span className="text-orange-400 font-bold">Racing Car</span> dan{" "}
          <span className="text-indigo-500 font-bold">Guesing Game </span>
          game ini cukup sederhana. Pemain hanya perlu melakukan komentar di
          live tiktok dengan suatu keyword untuk menggerakan mobil, atau
          menjawab pertanyaan pada Guessing game. Berikut demo gamenya
        </p>
        <Link className="mt-4 inline-flex" href="/work/#demo">
          <button className="bg-slate-900 text-white font-semibold px-8 shadow-md py-2 rounded-md">
            Demo
          </button>
        </Link>
      </div>
    </section>
  );
}
