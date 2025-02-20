import { responseQuestion } from "@/config/questionConfig";
import { NorthAmericaChart } from "../Charts/NorthAmericaChart";
import { QuestionSelector } from "../Inputs/QuestionSelector";
import {
  ContentsContainer,
  TwoColumnContainer,
} from "../Layout/ContentsContainer";
import { useState } from "react";
import { ResponseSelector } from "../Inputs/ResponseSelector";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { TableView } from "../Charts/TableView";

export const MapBreakdown = () => {
  const [question, setQuestion] = useState<string>("response_rate");
  const [responses, setResponses] = useState<string[]>([]);
  const updateQuestion = (question: string) => {
    setResponses([]);
    setQuestion(question);
  };
  const [showTable, setShowTable] = useState<boolean>(true);
  return (
    <ContentsContainer>
      <div>
        <ToggleButtonGroup
          value={showTable}
          exclusive
          onChange={(_, value) => {
            console.log(value);
            if (value !== null) setShowTable(value);
          }}
        >
          <ToggleButton value={false}>Map</ToggleButton>
          <ToggleButton value={true}>Table</ToggleButton>
        </ToggleButtonGroup>
      </div>
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
        {question === "response_rate" ? null :
        <div className={"text-sm italic"}>
            Please note: in order to maintain respondent anonymity, we only provide state/province breakdowns if there were five or more responses.
        </div>
        }
      {showTable ? (
        <div className="flex items-center justify-center">
          <TableView question={question} responses={responses} />
        </div>
      ) : (
        <NorthAmericaChart question={question} responses={responses} />
      )}
    </ContentsContainer>
  );
};
