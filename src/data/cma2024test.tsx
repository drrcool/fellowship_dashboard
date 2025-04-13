import { SurveyData } from "@/types";

export const surveyData: SurveyData = {
  title: "Testing Survey based on 2024 Questions",
  questions: [
    {
      label: "What is your age?",
      value: "age",
      options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    },
    {
      label: "Have you been to a residential treatment program or rehab?",
      value: "residential_treatment",
      options: ["Yes", "No", "Prefer not to disclose"],
    },
    {
      label: (
        <div>
          Where <b>CMA meetings</b> available to you to attend in residential
          treatment?
        </div>
      ),
      value: "cma_meetings_in_residential",
      options: ["Yes", "No", "Don't recall"],
      parent: "residential_treatment",
      condition: (d: string) => d == "Yes",
    },
  ],
};
