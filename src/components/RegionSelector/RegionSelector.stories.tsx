import { RegionSelector } from "./RegionSelector";
import { useState } from "react";
const meta = {
  component: RegionSelector,
};
export default meta;

export const Default = () => {
  const [region, setRegion] = useState("Global");
  return <RegionSelector region={region} setRegion={setRegion} />;
};
