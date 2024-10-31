import { choiceQuestions } from "@/config/questionConfig";
import { QuestionSelector } from "../Inputs/QuestionSelector";
import {
  ContentsContainer,
  TwoColumnContainer,
} from "../Layout/ContentsContainer";
import { useState } from "react";
import MosaicChart from "../Charts/MosaicChart";
import { MultiSelect } from "@tremor/react";
import { MultiSelectMosaicChart } from "../Charts/MultiSelectMosaicChart";

export const DataExplorer = ({ region }: { region: string }) => {
  // TODO : Build a filter bar
  // TODO: Build a question selector
  // TODO: Build a chart that looks at the rate of responses for a each response to a question and plots them compared to global

  const [question, setQuestion] = useState<string>(choiceQuestions[0].value);

  const LIST_QUESTIONS = [
    "attending_other_fellowships",
    "drugs_used",
    "introduction_to_cma",
    "months_years_clean",
    "negatively_affected",
    "positively_affected",
  ];
  const isListQuestion = LIST_QUESTIONS.includes(question);
  return (
    <ContentsContainer>
      <QuestionSelector question={question} setQuestion={setQuestion} />
      {isListQuestion ? (
        <MultiSelectMosaicChart column={question} />
      ) : (
        <MosaicChart column={question} />
      )}
    </ContentsContainer>
  );
};
