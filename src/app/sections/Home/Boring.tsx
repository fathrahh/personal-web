"use client";

import Button from "@/components/Button";
import UseMounted from "@/hooks/use-mounted";
import { useEffect, useId, useRef, useState } from "react";

export default function Boring() {
  const colorPickerId = useId();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMounted = UseMounted();
  const [colorPicker, setColorPicker] = useState<string>("#000000");

  useEffect(() => {
    if (!canvasRef) return;

    console.log(canvasRef);
  }, []);

  if (!isMounted) return;
  return (
    <section className="pb-16">
      <div className="text-center">
        <h2 className="text-6xl  font-bold">Are You Boring ?</h2>
        <h3 className="mt-2 text-lg font-semibold">
          Lets Relax your mind with drawing on our board 🍊
        </h3>
      </div>
      <div className="mt-6 w-full h-[600px] shadow-md rounded-lg p-4 ">
        <div className="flex gap-4">
          <label
            className="px-4 py-2 shadow bg-gray-100 font-semibold inline-flex items-center gap-3 cursor-pointer"
            htmlFor={colorPickerId}
          >
            <span>Pick Your Color</span>
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: colorPicker,
              }}
            />
          </label>
          <input
            id={colorPickerId}
            type="color"
            className="invisible absolute cursor-none"
            onChange={(e) => setColorPicker(e.target.value)}
            value={colorPicker}
          />
          <Button>Clear</Button>
        </div>
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
}
