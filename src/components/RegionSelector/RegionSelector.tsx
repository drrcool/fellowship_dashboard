import { useRegionList } from "@/hooks/useData";
import { SearchSelect, SearchSelectItem } from "@tremor/react";

export const RegionSelector = ({
  region,
  setRegion,
}: {
  region: string;
  setRegion: (region: string) => void;
}) => {
  const regions = useRegionList().filter((r) => r !== null);

  return (
    <div className="flex flex-col gap-2 justify-start ">
      <div>
        <p className="font-bold">Select a Region:</p>
      </div>
      <div>
        <SearchSelect
          value={region}
          onValueChange={(value) => setRegion(value)}
        >
          {regions.map((r) => (
            <SearchSelectItem key={r} value={r}>
              {r}
            </SearchSelectItem>
          ))}
        </SearchSelect>
      </div>
    </div>
  );
};
