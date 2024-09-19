import { getColors } from "@/data/colors";
import { DataPoint, useData, useRegionData } from "@/hooks/useData";
import { Legend, DonutChart, Card } from "@tremor/react";
import { ChartTitle } from "./utils/ChartTitle";

export const groupDataBy = (data: DataPoint[], key: string) => {
  const filteredData = data.filter((d) => d[key as keyof DataPoint]);
  const groupedData = filteredData.reduce(
    (acc, d) => {
      const value = d[key as keyof DataPoint] as string;
      if (!acc[value]) {
        acc[value] = 0;
      }
      acc[value] += 1;
      return acc;
    },
    {} as Record<string, number>
  );
  const total = Object.values(groupedData).reduce(
    (acc, value) => acc + value,
    0
  );
  const list = Object.entries(groupedData)
    .map(([key, value]) => ({
      name: key,
      value: (100.0 * value) / total,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return list;
};
export const intFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const percentFormatter = (number: number) => `${number.toFixed(2)}%`;
export const SimpleDonutChart = ({
  region,
  column,
  title,
}: {
  region: string;
  column: string;
  title: string;
}) => {
  const regionData = useRegionData(region);
  const fullData = useData();

  const regionFormattedData = groupDataBy(regionData, column);
  const fullFormattedData = groupDataBy(fullData, column);

  console.log(regionFormattedData);
  const genderList = fullFormattedData.map((d) => d.name);
  const regionGenderList = regionFormattedData.map((d) => d.name);

  const colorList = getColors(genderList);
  const regionColorList = regionGenderList.map((gender) => colorList[gender]);
  return (
    <Card>
      <div className="mg-5 flex flex-col gap-5">
        <ChartTitle title={title} />
        <div className="flex flex-col items-center justify-center space-x-6 space-y-5">
          <DonutChart
            data={regionFormattedData}
            category="value"
            index="name"
            valueFormatter={percentFormatter}
            colors={regionColorList}
            showLabel={false}
            showAnimation
            variant="donut"
          />
          <Legend categories={regionGenderList} colors={regionColorList} />
        </div>
      </div>
    </Card>
  );
};
