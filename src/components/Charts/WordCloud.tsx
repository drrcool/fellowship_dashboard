import { DataPoint, useRegionData } from "@/hooks/useData";

export const WordCloud = ({
  region,
  column,
}: {
  region: string;
  column: string;
}) => {
  const regionData = useRegionData(region);
  const key = column as keyof DataPoint;
  const values = regionData.map((d) => d[key] as string);
};
