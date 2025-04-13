"use client";

import { SurveyData } from "@/types";
import { useEffect, useState } from "react";

export const Survey = ({ surveyName }: { surveyName: string }) => {
  const [surveyData, setSurveyData] = useState<SurveyData | null>(null);
  useEffect(() => {
    if (surveyName) {
      // Dynamically import the survey data based on the surveyName
      import(`../../data/${surveyName}`)
        .then((module) => setSurveyData(module.surveyData))
        .catch((error) => console.error("Error loading survey:", error));
    }
  }, [surveyName]);

  if (!surveyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{surveyData.title}</h1>
      <ul>
        {surveyData.questions.map((question, index) => (
          <li key={index}>{question.label}</li>
        ))}
      </ul>
    </div>
  );
};
