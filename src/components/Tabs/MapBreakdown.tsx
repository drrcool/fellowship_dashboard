import { responseQuestion } from "@/config/questionConfig";
import { NorthAmericaChart } from "../Charts/NorthAmericaChart";
import { QuestionSelector } from "../Inputs/QuestionSelector";
import {
  ContentsContainer,
  TwoColumnContainer,
} from "../Layout/ContentsContainer";
import { useState } from "react";
import { ResponseSelector } from "../Inputs/ResponseSelector";

export const MapBreakdown = () => {
  const [question, setQuestion] = useState<string>("response_rate");
  const [responses, setResponses] = useState<string[]>([]);
  const updateQuestion = (question: string) => {
    setResponses([]);
    setQuestion(question);
  };
  return (
    <ContentsContainer>
      <TwoColumnContainer>
        <QuestionSelector
          question={question}
          setQuestion={updateQuestion}
          additionalQuestions={[responseQuestion]}
        />
        <ResponseSelector
          question={question}
          responses={responses}
          setResponses={setResponses}
        />
      </TwoColumnContainer>
      <NorthAmericaChart question={question} responses={responses} />
    </ContentsContainer>
  );
};
