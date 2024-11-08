import { createContext, useState } from "react";

type RegionContextType = {
  region: string;
  setRegion: (region: string) => void;
};
export const RegionContext = createContext<RegionContextType>({
  region: "Global",
  setRegion: () => {},
});

export const RegionContextProvider = ({ children }: { children: any }) => {
  const [region, setRegion] = useState("Global");
  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
