import { DataPoint, useRegionData } from "@/hooks/useData";
import { BarList, Card } from "@tremor/react";
import { ChartTitle } from "./utils/ChartTitle";
import { allQuestions } from "@/config/questionConfig";
export const cleanRanges = [
  { range: "0 to 6 months", averageAge: (0 + 0.5) / 2 },
  { range: "1 - 2 years", averageAge: (1 + 2) / 2 },
  { range: "11 - 15 years", averageAge: (11 + 15) / 2 },
  { range: "16 - 20 years", averageAge: (16 + 20) / 2 },
  { range: "21 - 25 years", averageAge: (21 + 25) / 2 },
  { range: "25 years and over", averageAge: 25 }, // Assuming 25 for simplicity
  { range: "3 - 5 years", averageAge: (3 + 5) / 2 },
  { range: "6 - 10 years", averageAge: (6 + 10) / 2 },
  { range: "6 months to 1 year", averageAge: (0.5 + 1) / 2 },
];
const meetingOrder = [
  "Do not attend meetings",
  "Prefer not to disclose",
  "Occasionally",
  "Monthly",
  "Bi-weekly",
  "Weekly",
  "2 - 3 times a week",
  "Daily",
].reverse();
export const sortFn = (key: string) => {
  if (key === "months_years_clean") {
    return (a: { name: string }, b: { name: string }) => {
      const aIndex =
        cleanRanges.find((range) => range.range === a.name)?.averageAge ?? 0;
      const bIndex =
        cleanRanges.find((range) => range.range === b.name)?.averageAge ?? 0;
      return aIndex - bIndex;
    };
  }
  if (key === "current_meeting_attendance") {
    return (a: { name: string }, b: { name: string }) => {
      const aIndex = meetingOrder.indexOf(a.name);
      const bIndex = meetingOrder.indexOf(b.name);
      return aIndex - bIndex;
    };
  }

  return (a: { name: string }, b: { name: string }) =>
    a.name.localeCompare(b.name);
};

export const barGroupBy = (data: DataPoint[], key: string) => {
  const filteredData = data.filter((d) => d[key as keyof DataPoint]);
  const groupedData = filteredData.reduce((acc, d) => {
    const value = d[key as keyof DataPoint] as string;
    if (!acc[value]) {
      acc[value] = 0;
    }
    acc[value] += 1;
    return acc;
  }, {} as Record<string, number>);
  const total = Object.values(groupedData).reduce(
    (acc, value) => acc + value,
    0
  );

  const list = Object.entries(groupedData)
    .map(([key, value]) => ({
      name: key,
      value: (100.0 * value) / total,
    }))
    .sort(sortFn(key));
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
  title?: string;
  subtitle?: string;
}) => {
  const regionData = useRegionData(region);
  const regionFormattedData = barGroupBy(regionData, column).filter(
    (row) => row.name !== ""
  );
  title = title ?? allQuestions.find((q) => q.value === column)?.label ?? "";
  return (
    <Card>
      <div className="mg-5 flex flex-col gap-5">
        <ChartTitle title={title} subtitle={subtitle} />
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
export default SimpleBarChart;
