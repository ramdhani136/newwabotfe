import React from "react";
import { Meta } from "../utils";

const HomePage: React.FC = () => {
  const metaData = {
    title: "Wabot - PT. Ekatunggal Tunas Mandiri",
    description: "Halaman home wabot ekatunggal",
  };

  return <>{Meta(metaData)}</>;
};

export default HomePage;
