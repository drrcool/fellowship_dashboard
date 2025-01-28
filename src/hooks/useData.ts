import dataset from "../data/dashboard_dataset.json";

type StringOrNull = string | null;
export type DataPoint = {
  gender: StringOrNull;
  ethnicity: StringOrNull;
  age: StringOrNull;
  drugs_used: Array<StringOrNull>;
  attending_other_fellowships: Array<StringOrNull>;
  negatively_affected: Array<StringOrNull>;
  positively_affected: Array<StringOrNull>;
  current_meeting_attendance: StringOrNull;
  felt_welcomed: StringOrNull;
  introduction_to_cma: Array<StringOrNull>;
  education: StringOrNull;
  employment_status: StringOrNull;
  months_years_clean: Array<StringOrNull>;
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
  state: StringOrNull;
};

export const useData = () => {
  return dataset as DataPoint[];
};

export const useRegionData = (region: string) => {
  const data = useData();
  if (region === "Global") {
    return data;
  }
  return data.filter((d) => d.cma_region === region || d.state === region);
};

export const useRegionList = () => {
  const data = useData();
  const global_region = { value: "Global", region: "Global" };
  const regions: { value: string; region: string}[] = [];

  const states: { value: string; region: string }[] = [];
  data.forEach((d) => {
    if (d.state && d.cma_region && !states.find((r) => r.value == d.state)) {
      states.push({ value: d.state, region: d.cma_region});
    }
    if (d.cma_region && !regions.find((r) => r.value == d.cma_region)) {
      regions.push({ value: d.cma_region, region: d.cma_region });
    }
  });
  return [global_region, ...regions, ...states];
};

export const useRegionCounts = () => {
  const regionList = useRegionList();
  const data = useData()
  const regionCounts: Record<string, number> = {}

  regionList.forEach((d) => {
    const matchLogic = (d.value === "Global") ? () => true :
      (row: DataPoint) => (row.state === d.value) || (row.cma_region === d.value)

    regionCounts[d.value] = data.filter((row) => matchLogic(row)).length
  })

  return regionCounts;
}
