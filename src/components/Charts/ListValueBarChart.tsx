import { allQuestions } from "@/config/questionConfig";
import { DataPoint, useData, useRegionData } from "@/hooks/useData";
import { BarList, Card } from "@tremor/react";
import { ChartTitle } from "./utils/ChartTitle";
import { sortFn } from "./SimpleBarChart";

const groupListDataBy = (data: DataPoint[], key: string) => {
  const filteredData = data.filter((d) => d[key as keyof DataPoint]);
  const groupedData = filteredData.reduce(
    (acc, d) => {
      const values = d[key as keyof DataPoint] as Array<string>;
      values.forEach((value) => {
        if (!acc[value]) {
          acc[value] = 0;
        }
        acc[value] += 1;
      });
      return acc;
    },
    {} as Record<string, number>
  );
  const total = Object.values(groupedData).reduce(
    (acc, value) => acc + value,
    0
  );
  console.log(sortFn(key));
  const list = Object.entries(groupedData)
    .map(([key, value]) => ({
      name: key,
      value: (100.0 * value) / total,
    }))
    .sort(sortFn(key));
  return list;
};

export const ListValueBarChart = ({
  region,
  column,
  title,
}: {
  region: string;
  column: string;
  title?: string;
}) => {
  title =
    title ?? allQuestions.find((q) => q.value === column)?.label ?? column;

  const regionData = useRegionData(region);
  const fullData = useData();

  const regionFormattedData = groupListDataBy(regionData, column);
  return (
    <Card>
      <div className="mg-5 flex flex-col gap-5">
        <ChartTitle title={title} />
        <BarList
          className="mt-6"
          data={regionFormattedData}
          showAnimation
          sortOrder="none"
          valueFormatter={(value: number) => `${value.toFixed(1)}%`}
        />
      </div>
    </Card>
  );
};
