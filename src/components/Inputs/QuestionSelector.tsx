import { choiceQuestions } from "@/config/questionConfig";
import { SearchSelect, SearchSelectItem } from "@tremor/react";

export const QuestionSelector = ({
  question,
  setQuestion,
}: {
  question: string;
  setQuestion: (question: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <div>
        <p className="font-bold">Select a Question:</p>
      </div>
      <div>
        <SearchSelect
          value={question}
          onValueChange={(value) => setQuestion(value)}
        >
          {choiceQuestions.map((r) => (
            <SearchSelectItem key={r.value} value={r.value}>
              {r.label}
            </SearchSelectItem>
          ))}
        </SearchSelect>
      </div>
    </div>
  );
};
