/* eslint-disable @next/next/no-img-element */
"use client";
import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type FormEvent,
} from "react";

import Car1 from "@/assets/images/mobil_biru.png";
import Car2 from "@/assets/images/mobil_merah.png";
import Jalan from "@/assets/images/jalan.png";
import Background from "@/assets/images/background.png";
import FinishLine from "@/assets/images/finish.png";

import useImage from "@/hooks/use-image";
import RacingCar from "./RacingCar";
import { Socket, io } from "socket.io-client";
import Image from "next/image";

const sources = {
  background: Background.src,
  car1: Car1.src,
  car2: Car2.src,
  road: Jalan.src,
  finish: FinishLine.src,
};

export type IncomeChat = {
  nickname: string;
  comment: string;
  profilePictureUrl: string;
};

export default function Game() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [wss, setWss] = useState<Socket | null>(null);
  const [canvasRatio, setCanvasRatio] = useState({
    w: 300,
    h: 300,
  });

  const [chats, setChats] = useState<IncomeChat[]>([]);
  const resourceImg = useImage(sources);

  const onConnect = useCallback(() => {
    setIsConnected(true);
  }, []);

  const onDisconnect = useCallback(() => {
    setIsConnected(false);
    setWss(null);
  }, []);

  const onError = useCallback((error: Error) => {
    setIsConnected(false);
    console.log(error);
  }, []);

  useEffect(() => {
    if (!wss) return;
    wss.on("connect", onConnect);
    wss.on("disconnect", onDisconnect);
    wss.on("connect_error", onError);

    return () => {
      if (!wss) return;
      wss.off("connect", onConnect);
      wss.off("disconnect", onDisconnect);
      wss.off("connect_error", onError);
    };
  }, [wss, onConnect, onDisconnect, onError]);

  const connectAndFindChannel = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (wss) {
      wss.disconnect();
      wss.off("connect", onConnect);
      wss.off("disconnect", onDisconnect);
      wss.off("connect_error", onError);
      setWss(null);
    }

    if (!inputRef.current) return;

    const socket = io(
      process.env.NODE_ENV === "production"
        ? "goldfish-app-4wbfl.ondigitalocean.app"
        : "http://localhost:4000",
      {
        transports: ["websocket"],
        query: {
          liveId: inputRef.current.value,
        },
        reconnection: false,
      }
    );

    socket.connect();
    setWss(socket);
  };

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
        <div
          ref={(el) => {
            if (!el) return;
            const { width, height } = el.getBoundingClientRect();
            if (width !== canvasRatio.w || height !== canvasRatio.h) {
              setCanvasRatio({
                w: width,
                h: height,
              });
            }
          }}
          className="col-span-12 md:col-span-8 h-[500px] rounded-md shadow-md overflow-hidden"
        >
          <RacingCar
            width={canvasRatio.w}
            height={canvasRatio.h}
            resourceImg={resourceImg}
            socket={wss}
            isConnected={isConnected}
            setChat={setChats}
          />
        </div>
        <div className="col-span-12 md:col-span-4 shadow-md rounded-md px-8 py-4 max-h-96 overflow-hidden">
          <h3 className="text-center">Kolom Komentar</h3>
          <ul className="w-full flex flex-1 h-full flex-col gap-2">
            {chats.map((chat) => (
              <li key={chat.nickname}>
                <div className="flex items-center gap-4">
                  <img
                    src={chat.profilePictureUrl}
                    className="w-8 h-8 rounded-full"
                    alt="tiktok-picture"
                  />
                  <span>{chat.nickname}</span>
                </div>
                <p>{chat.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
