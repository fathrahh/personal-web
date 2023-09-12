"use client";
import { Car } from "@/model/Car";
import { useState, useRef, useEffect, type FormEvent } from "react";

import Car1 from "@/assets/images/mobil_biru.png";
import Car2 from "@/assets/images/mobil_merah.png";

export default function Game() {
  const [canvasRatio, setCanvasRatio] = useState({
    w: 300,
    h: 300,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerCanvasRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const connectAndFindChannel = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!canvasRef.current || !containerCanvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
    const { width, height } =
      containerCanvasRef.current.getBoundingClientRect();

    setCanvasRatio({
      w: width,
      h: height,
    });

    const initialPositionCar = innerWidth / 15;
    const carSize = { width: 135, height: 45 };
    const goalSize = { width: 40, height: 165 };
    const finish = innerWidth - initialPositionCar * 2;
    const target = 150;
    const frameRate = 10;

    const velocity =
      (finish - initialPositionCar - carSize.width + goalSize.width) /
      (target * frameRate);

    const car1Img = new Image();
    car1Img.src = Car1.src;

    const car1 = new Car({
      x: initialPositionCar,
      y: 350,
      carSize,
      variant: car1Img,
      velocity,
      c: ctx,
    });
  }, []);

  return (
    <section className="mt-4 pb-6">
      <span className="text-gray-400 italic">
        Example: https://www.tiktok.com/@
        <span className=" not-italic font-semibold">TikTokId</span>
        /live
      </span>
      <form onSubmit={connectAndFindChannel} className="mt-4 ">
        {/* <label htmlFor="tiktokId">Tiktok ID</label> */}
        <input
          ref={inputRef}
          className="outline-none shadow-md rounded-md border-2 border-gray-100 focus:border-gray-300 transition-all px-4 py-2"
          placeholder="Insert tiktok Id Here"
          id="tiktokId"
        />
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg ml-3">
          Connect
        </button>
      </form>
      <div className="mt-12 grid grid-cols-12 gap-4">
        <div ref={containerCanvasRef} className="col-span-8 aspect-video">
          <canvas
            ref={canvasRef}
            width={canvasRatio.w}
            height={canvasRatio.h}
            className="bg-slate-100"
          />
        </div>
        <div className="col-span-4 shadow-md px-8 py-4">
          <h3 className="text-center">Kolom Komentar</h3>
        </div>
      </div>
    </section>
  );
}
