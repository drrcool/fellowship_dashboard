"use client";
import { SampleSizeCard } from "@/components/Charts/SampleSize/SampleSizeCard";
import { Header } from "@/components/Header/Header";
import { TabConfig, Tabs } from "@/components/Header/Tabs";
import { RegionSelector } from "@/components/Inputs/RegionSelector/RegionSelector";
import { tabConfig } from "@/config/tabConfig";
import { useContext, useState } from "react";
import { RegionContext } from "@/components/Contexts/RegionContext";
import { Footer } from "@/components/Footer/Footer";

export default function App() {
  const { region, setRegion } = useContext(RegionContext);
  const [currentTab, setCurrentTab] = useState<TabConfig>(tabConfig[0]);
  const Component = currentTab.component;
  return (
    <>
      <div className="mx-10 my-5">
        <Header />
        <div className="m-5 gap-5 flex flex-col">
          <div className="flex justify-between flex-wrap gap-5">
            <RegionSelector region={region} setRegion={setRegion} />
            <SampleSizeCard region={region} />
          </div>
          <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <Component region={region} />
        </div>
        <Footer />
      </div>
    </>
  );
}
