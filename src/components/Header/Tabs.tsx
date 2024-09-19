"use client";
import { tabConfig } from "@/config/tabConfig";
import { Tab, TabGroup, TabList } from "@tremor/react";
export type TabConfig = {
  index: number;
  label: string;
  component: ({ region }: { region: string }) => JSX.Element;
};
export const Tabs = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: TabConfig;
  setCurrentTab: (tab: TabConfig) => void;
}) => {
  return (
    <div className="">
      <TabGroup
        index={currentTab.index}
        onIndexChange={(index) => {
          console.log(index);
          setCurrentTab(tabConfig[index]);
        }}
      >
        <TabList variant="solid">
          {Object.values(tabConfig).map((tab) => (
            <Tab value={tab.index} key={tab.index}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
      </TabGroup>
    </div>
  );
};
