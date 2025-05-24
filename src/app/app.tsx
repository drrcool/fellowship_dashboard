"use client";
import { TabConfig, Tabs } from "@/components/Header/Tabs";
import { tabConfig } from "@/config/tabConfig";
import { useContext, useState } from "react";
import { RegionContext } from "@/components/Contexts/RegionContext";
import { redirect } from "next/navigation";

const RedirectToPage = ({ url }: { url: string }) => {
  redirect(url);
};

export default function App() {
  const { region, setRegion } = useContext(RegionContext);
  const [currentTab, setCurrentTab] = useState<TabConfig>(tabConfig[0]);
  const Component = currentTab.component;
  return (
    <RedirectToPage url={"https://crystalmeth.org/fellowship-survey-results"} />
  );
}
