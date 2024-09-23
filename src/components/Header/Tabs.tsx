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
  const selectedClass = "color-primary-500 background-white";
  const unselectedClass = "color-grey-500 background-grey-100";

  return (
    <div>
      <TabGroup
        index={currentTab.index}
        onIndexChange={(index) => {
          setCurrentTab(tabConfig[index]);
        }}
      >
        <TabList variant="solid" className="flex-col md:flex-row">
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
