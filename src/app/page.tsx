"use client";
import { SampleSizeCard } from "@/components/Charts/SampleSize/SampleSizeCard";
import { Demographics } from "@/components/Demographics/Demographics";
import { Header } from "@/components/Header/Header";
import { TabConfig, Tabs } from "@/components/Header/Tabs";
import { RegionSelector } from "@/components/RegionSelector/RegionSelector";
import { useState } from "react";

export const tabConfig: Record<string, TabConfig> = {
  0: { index: 0, label: "Demographics", component: Demographics },
  1: { index: 1, label: "Experience in Recovery", component: Demographics },
  2: { index: 2, label: "Hospitals & Institutions", component: Demographics },
  3: {
    index: 3,
    label: "Diversity, Equity, & Inclusion",
    component: Demographics,
  },
};
export default function Home() {
  const [region, setRegion] = useState("Global");
  const [currentTab, setCurrentTab] = useState<TabConfig>(tabConfig[0]);
  const Component = currentTab.component;
  return (
    <div>
      <Header />
      <div className="m-5">
        <div className="flex justify-between ">
          <RegionSelector region={region} setRegion={setRegion} />
          <SampleSizeCard region={region} />
        </div>
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Component region={region} />
      </div>
    </div>
  );
}
