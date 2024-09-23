"use client";
import { SampleSizeCard } from "@/components/Charts/SampleSize/SampleSizeCard";
import { Header } from "@/components/Header/Header";
import { TabConfig, Tabs } from "@/components/Header/Tabs";
import { RegionSelector } from "@/components/Inputs/RegionSelector/RegionSelector";
import { tabConfig } from "@/config/tabConfig";
import { useState } from "react";

export default function Home() {
  const [region, setRegion] = useState("Global");
  const [currentTab, setCurrentTab] = useState<TabConfig>(tabConfig[0]);
  const Component = currentTab.component;
  return (
    <div>
      <Header />
      <div className="m-5 gap-5 flex flex-col">
        <div className="flex justify-between flex-wrap gap-5">
          <RegionSelector region={region} setRegion={setRegion} />
          <SampleSizeCard region={region} />
        </div>
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Component region={region} />
      </div>
    </div>
  );
}
