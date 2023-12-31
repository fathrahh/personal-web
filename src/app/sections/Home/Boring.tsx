"use client";

import Button from "@/components/Button";
import React, { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Boring() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerCanvasRef = useRef<HTMLDivElement | null>(null);

  const [isPainting, setIsPainting] = useState(false);
  const [radius, setRadius] = useState(1);
  const [blur, setBlur] = useState(0);

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

    context.shadowBlur = blur;
    context.lineWidth = radius * 2;
    context.strokeStyle = colorPicker;
    context.fillStyle = colorPicker;
    context.shadowColor = colorPicker;
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
  };

  const clearCanvas = () => {
    const context = getContext();
    if (!context) return;

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  const downloadImage = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let canvasUrl = canvas.toDataURL();

    const createEl = document.createElement("a");
    createEl.href = canvasUrl;

    createEl.download = new Date().getTime() + "_Gambar_gabut.jpg";

    createEl.click();
    createEl.remove();
  };

  useEffect(() => {
    if (!canvasRef.current || !containerCanvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
    const { width, height } =
      containerCanvasRef.current.getBoundingClientRect();

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
  }, []);

  return (
    <section className="pb-16">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold">Are You Boring ?</h2>
        <h3 className="mt-2 text-lg font-semibold">
          Lets Relax your mind with drawing on our board 🍊
        </h3>
      </div>
      <div
        ref={containerCanvasRef}
        className="mt-6 w-full h-[600px] shadow-md rounded-lg relative overflow-hidden"
      >
        {/* Change this with beautifull scrollbar */}
        <div className="w-full m-4 absolute px-4">
          <PerfectScrollbar className="flex w-auto gap-4 pb-4">
            <label
              className="px-4 py-2 shadow bg-gray-100 font-semibold inline-flex flex-shrink-0 items-center gap-3 cursor-pointer"
              htmlFor={"color-picker"}
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
              id={"color-picker"}
              type="color"
              className="invisible absolute cursor-none"
              onChange={(e) => setColorPicker(e.target.value)}
              value={colorPicker}
            />
            <Button
              className="flex-shrink-[1_0_auto]"
              onClick={downloadImage}
              variant={"secondary"}
            >
              Save as Picture
            </Button>
            <Button onClick={clearCanvas}>Clear</Button>
            <div className="inline-flex gap-2 items-center">
              <label htmlFor="radius">Radius</label>
              <input
                id="radius"
                type="range"
                min={1}
                max={10}
                value={radius}
                onChange={(event) => setRadius(event.target.valueAsNumber)}
              />
            </div>
            <div className="inline-flex gap-2 items-center">
              <label htmlFor="blur">Blur</label>
              <input
                id="blur"
                type="range"
                min={1}
                max={10}
                value={blur}
                onChange={(event) => setBlur(event.target.valueAsNumber)}
              />
            </div>
          </PerfectScrollbar>
        </div>
        <canvas
          className="cursor-default bg-white"
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
