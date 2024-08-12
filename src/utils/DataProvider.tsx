import { createContext, useContext, useState } from "react";
import dataset from "../data/dashboard_dataset.json";

export type ProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};
type StringOrNull = string | null;
type DataPoint = {
  gender: StringOrNull;
  ethnicity: StringOrNull;
  age: StringOrNull;
  drugs_used: Array<StringOrNull>;
  attending_other_fellowships: Array<StringOrNull>;
  negatively_affected: Array<StringOrNull>;
  positively_affected: Array<StringOrNull>;
  current_meeting_attendance: StringOrNull;
  felt_welcomed: StringOrNull;
  introduction_to_cma: StringOrNull;
  education: StringOrNull;
  employment_status: StringOrNull;
  months_years_clean: StringOrNull;
  relapse_part_of_story: StringOrNull;
  twelve_step_sponsor: StringOrNull;
  currently_working_steps: StringOrNull;
  have_homegroup: StringOrNull;
  ever_been_incarcerated: StringOrNull;
  access_to_meetings_incarcerated: StringOrNull;
  residential_treatment_experience: StringOrNull;
  cma_meetings_in_residential: StringOrNull;
  dei_feelings: StringOrNull;
  dei_freeform: StringOrNull;
  what_see_more: StringOrNull;
  city: StringOrNull;
  region: StringOrNull;
  country: StringOrNull;
  cma_region: StringOrNull;
};
type DataContextType = {
  data: DataPoint[];
  region: string;
  setRegion: (region: string) => void;
};
const DataContext = createContext<DataContextType>({
  data: [],
  region: "Global",
  setRegion: () => {},
});

export const DataProvider = ({ children }: ProviderProps) => {
  const data = dataset as DataPoint[];
  const [region, setRegion] = useState("Global");
  return (
    <DataContext.Provider value={{ data, region, setRegion }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const useRegionData = () => {
  const { data, region } = useData();
  if (region === "Global") {
    return data;
  }
  return data.filter((d) => d.cma_region === region);
};

export const useRegionList = () => {
  const { data } = useData();
  const regions = ["Global", ...data.map((d) => d.cma_region)];
  return Array.from(new Set(regions));
};
