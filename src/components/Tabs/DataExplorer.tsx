import { choiceQuestions } from "@/config/questionConfig";
import { QuestionSelector } from "../Inputs/QuestionSelector";
import {
  ContentsContainer,
  TwoColumnContainer,
} from "../Layout/ContentsContainer";
import { useState } from "react";

export const DataExplorer = ({ region }: { region: string }) => {
  // TODO : Build a filter bar
  // TODO: Build a question selector
  // TODO: Build a chart that looks at the rate of responses for a each response to a question and plots them compared to global

  const [question, setQuestion] = useState<string>(choiceQuestions[0].value);
  return (
    <ContentsContainer>
      <TwoColumnContainer>
        <QuestionSelector question={question} setQuestion={setQuestion} />
      </TwoColumnContainer>
    </ContentsContainer>
  );
};
