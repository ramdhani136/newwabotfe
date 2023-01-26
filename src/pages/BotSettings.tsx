import React, { useState } from "react";
import { Meta } from "../utils";
import Socket from "../utils/Socket";

const BotSettings: React.FC = () => {
  const [qr, setQr] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const metaData = {
    title: "BotSettings - PT. Ekatunggal Tunas Mandiri",
    description: "Halaman BotSettings wabot ekatunggal",
  };
  Socket.on("message", (data) => {
    setMsg(data);
  });

  Socket.on("qr", (data) => {
    setQr(data);
  });

  return (
    <>
      {Meta(metaData)}
      <div>
        <img className="border w-[300px] h-[300px] m-10" src={qr} />
        <h4>{msg}</h4>
      </div>
    </>
  );
};

export default BotSettings;
