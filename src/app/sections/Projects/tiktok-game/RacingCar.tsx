import { Car } from "@/model/Car";
import { Dispatch, SetStateAction, memo, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
import { IncomeChat } from "./Game";

interface Props {
  width: number;
  height: number;
  resourceImg: any;
  socket: Socket | null;
  isConnected: boolean;
  setChat: Dispatch<SetStateAction<IncomeChat[]>>;
}

function RacingCar({
  width,
  height,
  resourceImg,
  socket,
  isConnected,
  setChat,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!resourceImg || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
    const initialPositionCar = width / 15;
    const carSize = { width: 135, height: 45 };
    const goalSize = { width: 40, height: 165 };
    const finish = width - initialPositionCar * 2;
    const target = 150;
    const frameRate = 10;

    const velocity =
      (finish - initialPositionCar - carSize.width + goalSize.width) /
      (target * frameRate);

    const car1 = new Car({
      x: initialPositionCar,
      y: 350,
      carSize,
      variant: resourceImg.car1,
      velocity,
      c: ctx,
    });

    const car2 = new Car({
      x: initialPositionCar,
      y: 425,
      carSize,
      variant: resourceImg.car2,
      velocity,
      c: ctx,
    });

    const roadHeight = 200;

    ctx.drawImage(
      resourceImg.background,
      0,
      50 - width / 6,
      width,
      290 + width / 7
    );
    ctx.drawImage(resourceImg.road, 0, height - roadHeight, width, roadHeight);
    ctx.drawImage(
      resourceImg.finish,
      finish,
      height - goalSize.height - 10,
      goalSize.width,
      goalSize.height
    );

    car1.show();
    car2.show();
  }, [resourceImg, width, height]);

  useEffect(() => {
    if (!socket) return;

    const handleChat = (data: IncomeChat) => {
      setChat((prev) => [...prev, data]);
    };

    socket.on("chat", handleChat);

    return () => {
      socket.off("chat", handleChat);
    };
  }, [socket, setChat]);

  return (
    <>
      {!isConnected && <div>Lost Connection</div>}
      <canvas ref={canvasRef} width={width} height={height} />
    </>
  );
}

export default memo(RacingCar);
