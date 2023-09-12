"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function ProjectPage() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
      query: {
        liveId: "pcysaf",
      },
      reconnection: false,
    });

    socket.connect();
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onError(error: Error) {
      console.log(error);
    }

    function handleIncomingChat(data: any) {
      console.log("chat: ", data);
    }

    function handleIncomingGift(data: any) {
      console.log("gift: ", data);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("connect_error", onError);
    socket.on("chat", handleIncomingChat);
    socket.on("gift", handleIncomingGift);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("connect_error", onError);
      socket.off("chat", handleIncomingChat);
      socket.off("gift", handleIncomingGift);
      socket.disconnect();
    };
  }, []);

  return <div>{isConnected.toString()}</div>;
}
