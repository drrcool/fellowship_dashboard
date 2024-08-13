"use client";
import { SampleSizeCard } from "@/components/Charts/SampleSize/SampleSizeCard";
import { Demographics } from "@/components/Demographics/Demographics";
import { Header } from "@/components/Header/Header";
import { RegionSelector } from "@/components/RegionSelector/RegionSelector";
import { useState } from "react";

export default function Home() {
  const [region, setRegion] = useState("Global");
  return (
    <div>
      <Header />
      <div className="m-5">
        <div className="flex justify-between ">
          <RegionSelector region={region} setRegion={setRegion} />
          <SampleSizeCard region={region} />
        </div>
        <Demographics region={region} />
      </div>
    </div>
  );
}
