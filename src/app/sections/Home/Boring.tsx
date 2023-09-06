"use client";

import Button from "@/components/Button";
import UseMounted from "@/hooks/use-mounted";
import React, { useEffect, useId, useRef, useState } from "react";

export default function Boring() {
  const colorPickerId = useId();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerCanvasRef = useRef<HTMLDivElement | null>(null);
  const [canvasScale, setCanvasScale] = useState({
    w: 300,
    h: 300,
  });

  const isMounted = UseMounted();
  const [isPainting, setIsPainting] = useState(false);
  // const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const [colorPicker, setColorPicker] = useState<string>("#000000");

  const startPainting = () => {
    setIsPainting(true);
  };

  const getContext = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    return context as CanvasRenderingContext2D;
  };

  const stopPainting = () => {
    setIsPainting(false);
    const context = getContext();

    if (!context) return;
    context.beginPath();
  };

  const sketch = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const context = getContext();
    if (!isPainting || !canvasRef.current || !context) return;

    const { left, top } = canvasRef.current.getBoundingClientRect();

    const x = event.clientX - left,
      y = event.clientY - top;

    context.lineWidth = 10;
    context.strokeStyle = colorPicker;
    context.fillStyle = colorPicker;
    context.shadowColor = colorPicker;
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
  };

  const clearCanvas = () => {
    const context = getContext();
    if (!context) return;

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  useEffect(() => {
    if (!canvasRef.current || !containerCanvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
    const { width, height } =
      containerCanvasRef.current.getBoundingClientRect();

    setCanvasScale({
      w: width,
      h: height,
    });
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
      <div
        ref={containerCanvasRef}
        className="mt-6 w-full h-[600px] shadow-md rounded-lg relative"
      >
        <div className="flex gap-4 absolute m-4">
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
          <Button onClick={clearCanvas}>Clear</Button>
        </div>
        <canvas
          width={canvasScale.w}
          height={canvasScale.h}
          onMouseDown={startPainting}
          onMouseLeave={stopPainting}
          onMouseUp={stopPainting}
          onMouseMove={sketch}
          ref={canvasRef}
        />
      </div>
    </section>
  );
}
