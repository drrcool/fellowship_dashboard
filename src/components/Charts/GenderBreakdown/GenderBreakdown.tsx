import { getColors } from "@/data/colors";
import { DataPoint, useData, useRegionData } from "@/hooks/useData";
import { Legend, DonutChart } from "@tremor/react";

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
export const GenderBreakdown = ({ region }: { region: string }) => {
  const regionData = useRegionData(region);
  const fullData = useData();

  const regionFormattedData = groupDataBy(regionData, "gender");
  const fullFormattedData = groupDataBy(fullData, "gender");

  const genderList = fullFormattedData.map((d) => d.name);
  const regionGenderList = regionFormattedData.map((d) => d.name);

  const colorList = getColors(genderList);
  const regionColorList = regionGenderList.map((gender) => colorList[gender]);
  console.log(regionColorList);
  console.log(regionFormattedData);
  return (
    <div className="flex items-center justify-center space-x-6">
      <DonutChart
        data={regionFormattedData}
        category="value"
        index="name"
        valueFormatter={percentFormatter}
        className="w-40"
        colors={regionColorList}
      />
      <Legend
        categories={regionGenderList}
        colors={regionColorList}
        className="max-w-xs"
      />
    </div>
  );
};
