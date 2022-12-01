import React from "react";
import Template from "../components/Template";

export default function Home() {
  return (
    <Template title="Beranda">
      <div className="text-center">
        <div className="bg-orange-100 inline flex flex-col rounded-sm shadow-lg justify-center">
          <h1 className="mt-20 text-2xl text-blue-900">NBA APP</h1>
          <h1 className="mt-20">Build By Kelompok 23</h1>
          <h1 className="mt-2">Roselin Yosefa</h1>
          <h1 className="mt-2">Fadzil Ferdiawan</h1>
          <h1 className="mt-2">Amezry Azmi Hanif Shidqi</h1>
          <h1 className="mt-2 mb-20">Indriawan Muhammad Akbar</h1>
        </div>
      </div>
    </Template>
  );
}
