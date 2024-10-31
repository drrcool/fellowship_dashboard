import { useData } from "@/hooks/useData";
import React from "react";
import { HeatMap } from "@nivo/heatmap";
import { groupListDataBy } from "./ListValueBarChart";

const toTwoDecimals = (num: number) => Math.round(num * 100) / 100;
export const groupAndFormatData = (
  data: any,
  column: string,
  valueList: string[]
) => {
  const groupedData = groupListDataBy(data, column);
  const thisData = valueList.map((name) => {
    return {
      x: name,
      y: toTwoDecimals(
        groupedData.find((d: any) => d.name === name)?.value ?? 0
      ),
    };
  });
  return thisData;
};
const formatMultiSelectData = (data: any, column: string) => {
  const globalGroupedData = groupListDataBy(data, column);
  const responseList: string[] = globalGroupedData.map((d: any) => d.name);
  const regionList: string[] = Array.from(
    new Set(data.map((d: any) => d.cma_region))
  );

  const formattedData = regionList.map((region: string) => {
    const regionData = data.filter((d: any) => d.cma_region === region);
    const thisData = groupAndFormatData(regionData, column, responseList);
    return { id: region, data: thisData };
  });

  const globalData = {
    id: "Global",
    data: groupAndFormatData(data, column, responseList),
  };

  return {
    data: [globalData, ...formattedData],
    responseList,
    regionList,
  };
};

export const MultiSelectMosaicChart = ({ column }: { column: string }) => {
  const fullData = useData();
  const {
    data: formattedData,
    responseList,
    regionList,
  } = formatMultiSelectData(fullData, column);
  console.log(formattedData);

  return (
    <HeatMap
      width={1200}
      height={800}
      margin={{ left: 150, top: 150, right: 150 }}
      data={formattedData}
      colors={{
        type: "diverging",
        scheme: "red_yellow_blue",
      }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        legend: "",
        legendOffset: 46,
      }}
    />
  );
};
