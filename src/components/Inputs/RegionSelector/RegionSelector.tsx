import { useRegionList } from "@/hooks/useData";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { useState } from "react";

export const RegionSelector = ({
  region,
  setRegion,
}: {
  region: string;
  setRegion: (region: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const raw_regions = useRegionList();
  const regions = raw_regions.sort((a, b) => {
    if (a.value === "Global") {
      return -1;
    }
    if (b.value === "Global") {
      return 1;
    }
    if (a.region === b.region) {
      if (a.value === a.region) return -1;
      if (b.value === b.region) return 1;
      return a.value.localeCompare(b.value);
    }
    return a.region.localeCompare(b.region);
  });

  return (
    <div className="flex flex-col gap-2 justify-start ">
      <div>
        <p className="font-bold">Select a Region/State/Province:</p>
      </div>
      <div>
        <SearchSelect
          value={region}
          onValueChange={(value) => setRegion(value)}
          searchValue={searchValue}
          onSearchValueChange={(value) => setSearchValue(value)}
        >
          {regions.map((r) => (
            <SearchSelectItem key={r.value} value={r.value}>
              <span style={{ fontWeight: r.value === r.region ? 600 : 200 }}>
                {r.value}
              </span>
            </SearchSelectItem>
          ))}
        </SearchSelect>
      </div>
    </div>
  );
};
