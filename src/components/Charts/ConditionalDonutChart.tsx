import { allQuestions } from "@/config/questionConfig";
import { DataPoint, useData, useRegionData } from "@/hooks/useData";
import { groupDataBy, percentFormatter } from "./SimpleDonutChart";
import { getColors } from "@/data/colors";
import { Card, DonutChart, Legend } from "@tremor/react";
import { ChartTitle } from "./utils/ChartTitle";

export const ConditionalDonutChart = ({
  region,
  column,
  filterColumn,
  filterValue,
}: {
  region: string;
  column: string;
  filterColumn: string;
  filterValue: string;
}) => {
  const title = allQuestions.find((q) => q.value === column)?.label ?? "";
  const key = filterColumn as keyof DataPoint;
  const regionData = useRegionData(region).filter(
    (d) => d[key] === filterValue
  );
  const allData = useData().filter((d) => d[key] === filterValue);

  const regionFormattedData = groupDataBy(regionData, column);
  const fullFormattedData = groupDataBy(allData, column);

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
