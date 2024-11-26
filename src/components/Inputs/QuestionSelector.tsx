import { choiceQuestions, QuestionConfig } from "@/config/questionConfig";
import { MenuItem, Select } from "@mui/material";

export const QuestionSelector = ({
  question,
  setQuestion,
  additionalQuestions,
}: {
  question: string;
  setQuestion: (question: string) => void;
  additionalQuestions?: QuestionConfig[];
}) => {
  const questions = additionalQuestions
    ? [...additionalQuestions, ...choiceQuestions]
    : choiceQuestions;
  return (
    <div className="flex flex-col gap-2 justify-start">
      <div>
        <p className="font-bold">Select a Question:</p>
      </div>
      <div>
        <Select
          value={question}
          onChange={(value) => setQuestion(value.target.value)}
          style={{ width: "100%" }}
        >
          {questions.map((r) => (
            <MenuItem key={r.value} value={r.value}>
              {r.label}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
