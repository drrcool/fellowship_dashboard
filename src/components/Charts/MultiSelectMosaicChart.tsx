import { useData } from "@/hooks/useData";
import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { groupListDataBy } from "./ListValueBarChart";
import invert from "invert-color";
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

const labelTextColor = ({ color }: { color: string }) => {
  // get RGB numbers from string
  const colors: any = color.replace(/[^\d,]/g, "").split(",");

  // true as param to get only black or white colors
  return invert(colors, true);
};
export const MultiSelectMosaicChart = ({ column }: { column: string }) => {
  const fullData = useData();
  const {
    data: formattedData,
    responseList,
    regionList,
  } = formatMultiSelectData(fullData, column);

  return (
    <div style={{ height: "800px" }}>
      <ResponsiveHeatMap
        labelTextColor={labelTextColor}
        margin={{ left: 150, top: 150, right: 150 }}
        data={formattedData}
        colors={{
          type: "sequential",
          scheme: "purple_blue",
        }}
        axisLeft={{
          tickSize: 1,
        }}
        axisTop={{
          tickSize: 1,
          tickPadding: 5,
          tickRotation: -45,
          legend: "",
          legendOffset: 46,
        }}
      />
    </div>
  );
};
