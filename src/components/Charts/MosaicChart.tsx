import { useData } from "@/hooks/useData";
import { groupDataBy } from "./SimpleDonutChart";
import { BarChart } from "@mui/x-charts";
import { getColors } from "@/data/colors";

// TODO: Bring in logic that handles questions with multiple responses.
// This is likely not a mosaic chart, so maybe we move this to the data explorer
// component and build a new chart for this.

const formatMultiRegionData = (data: any, column: string) => {
  const regionList: string[] = Array.from(
    new Set(data.map((d: any) => d.cma_region))
  );
  const valueList: string[] = Array.from(
    new Set(data.map((d: any) => d[column]).filter((d: any) => d))
  );
  console.log(valueList);

  const output = regionList.map((region: string) => {
    const regionData = data.filter((d: any) => d.cma_region === region);
    const groupedData = groupDataBy(regionData, column);
    const thisData = valueList.reduce((acc, name) => {
      acc[name] = groupedData.find((d: any) => d.name === name)?.value ?? 0;
      return acc;
    }, {} as Record<string, number>);
    return { region, ...thisData };
  });
  return { data: output, valueList };
};

const MosaicChart = ({ column }: { column: string }) => {
  const fullData = useData();
  console.log(fullData);
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
