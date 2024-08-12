"use client";
import { useData, useRegionList } from "@/utils/DataProvider";
import { SearchSelect, SearchSelectItem } from "@tremor/react";

export const RegionSelector = () => {
  const { region, setRegion } = useData();
  const regions = useRegionList().filter((r) => r !== null);

  return (
    <div className="flex flex-row gap-2 justify-start items-center">
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
