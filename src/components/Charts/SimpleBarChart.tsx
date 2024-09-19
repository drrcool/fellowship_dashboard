import { getColors } from "@/data/colors";
import { DataPoint, useData, useRegionData } from "@/hooks/useData";
import { BarList, Card } from "@tremor/react";
import {
  groupDataBy,
  intFormatter,
  percentFormatter,
} from "./SimpleDonutChart";
import { ChartTitle } from "./utils/ChartTitle";

export const barGroupBy = (data: DataPoint[], key: string) => {
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
  const list = Object.entries(groupedData).map(([key, value]) => ({
    name: key,
    value: (100.0 * value) / total,
  }));
  return list;
};

const SimpleBarChart = ({
  region,
  column,
  title,
  subtitle,
}: {
  region: string;
  column: string;
  title: string;
  subtitle?: string;
}) => {
  const regionData = useRegionData(region);

  const regionFormattedData = barGroupBy(regionData, column).filter(
    (row) => row.name !== ""
  );
  return (
    <Card>
      <div className="mg-5 flex flex-col gap-5">
        <ChartTitle title={title} subtitle={subtitle} />
        <BarList
          className="mt-6"
          data={regionFormattedData}
          showAnimation
          valueFormatter={(value: number) => `${value.toFixed(1)}%`}
        />
      </div>
    </Card>
  );
};
export default SimpleBarChart;
