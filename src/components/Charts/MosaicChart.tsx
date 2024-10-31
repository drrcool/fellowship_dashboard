import { useData } from "@/hooks/useData";
import { groupDataBy } from "./SimpleDonutChart";
import { BarChart } from "@mui/x-charts";
import { getColors } from "@/data/colors";

// TODO: Bring in logic that handles questions with multiple responses.
// This is likely not a mosaic chart, so maybe we move this to the data explorer
// component and build a new chart for this.

export const groupAndFormatData = (
  data: any,
  column: string,
  valueList: string[]
) => {
  const groupedData = groupDataBy(data, column);
  const thisData = valueList.reduce((acc, name) => {
    acc[name] = groupedData.find((d: any) => d.name === name)?.value ?? 0;
    return acc;
  }, {} as Record<string, number>);
  return thisData;
};

const formatMultiRegionData = (data: any, column: string) => {
  const regionList: string[] = Array.from(
    new Set(data.map((d: any) => d.cma_region))
  );
  const valueList: string[] = Array.from(
    new Set(data.map((d: any) => d[column]).filter((d: any) => d))
  );

  const regionOutput = regionList.map((region: string) => {
    const regionData = data.filter((d: any) => d.cma_region === region);
    const thisData = groupAndFormatData(regionData, column, valueList);
    return { region, ...thisData };
  });
  // We also want Global as one of the entries.  Probably the first
  const globalData = {
    region: "Global",
    ...groupAndFormatData(data, column, valueList),
  };

  return { data: [globalData, ...regionOutput], valueList };
};

const MosaicChart = ({ column }: { column: string }) => {
  const fullData = useData();
  const { data: formattedData, valueList } = formatMultiRegionData(
    fullData,
    column
  );
  const colors = getColors(valueList);
  return (
    <BarChart
      height={800}
      margin={{ left: 150, top: 100 }}
      yAxis={[{ scaleType: "band", dataKey: "region" }]}
      xAxis={[{ min: 0, max: 100 }]}
      dataset={formattedData}
      series={valueList.map((value) => ({
        dataKey: value,
        label: value,
        stack: "1",
        color: colors[value],
      }))}
      layout="horizontal"
    />
  );
};
export default MosaicChart;
