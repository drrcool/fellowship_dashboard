import { useRegionData } from "@/hooks/useData";
import { Card, ProgressBar } from "@tremor/react";

export const SampleSizeCard = ({ region }: { region: string }) => {
  const regionDataLength = useRegionData(region).length;
  const fullDataLength = useRegionData("Global").length;
  const percentOfTotal = Math.round((regionDataLength / fullDataLength) * 100);
  return (
    <Card className="max-w-xs" decoration="top" decorationColor="cyan">
      <div className="flex flex-col gap-1">
        <div>
          <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {regionDataLength} responses
          </p>
        </div>
        <div>
          <ProgressBar value={percentOfTotal} />
          <p className="text-right">{percentOfTotal}% of total</p>
        </div>
      </div>
    </Card>
  );
};
