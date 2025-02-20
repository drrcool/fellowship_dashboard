import { Demographics } from "@/components/Tabs/Demographics";
import { TabConfig } from "@/components/Header/Tabs";
import { RecoveryExperience } from "@/components/Tabs/RecoveryExperience";
import { HospitalsAndInstitutions } from "@/components/Tabs/HospitalsAndInstitutions";
import { Diversity } from "@/components/Tabs/Diversity";
import { DataExplorer } from "@/components/Tabs/DataExplorer";
import { SeeMore } from "@/components/Tabs/SeeMore";
import { MapBreakdown } from "@/components/Tabs/MapBreakdown";

export const tabConfig: Record<string, TabConfig> = {
  0: { index: 0, label: "Demographics", component: Demographics },
  1: {
    index: 1,
    label: "Experience in Recovery",
    component: RecoveryExperience,
  },
  2: {
    index: 2,
    label: "Hospitals & Institutions",
    component: HospitalsAndInstitutions,
  },
  3: {
    index: 3,
    label: "Diversity, Equity, & Inclusion",
    component: Diversity,
  },
  4: {
    index: 4,
    label: "Suggestions",
    component: SeeMore,
  },
  5: {
    index: 5,
    label: "Regional Comparisons",
    component: DataExplorer,
  },
  6: {
    index: 6,
    label: "State/Province Map",
    component: MapBreakdown,
  },
};
