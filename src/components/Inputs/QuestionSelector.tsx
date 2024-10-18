import { choiceQuestions } from "@/config/questionConfig";
import { SearchSelect, SearchSelectItem } from "@tremor/react";

export const QuestionSelector = ({
  question,
  setQuestion,
}: {
  question: string;
  setQuestion: (question: string) => void;
}) => {
  const LIST_QUESTIONS = [
    "attending_other_fellowships",
    "drugs_used",
    "introduction_to_cma",
    "months_years_clean",
    "negatively_affected",
    "positively_affected",
  ];
  const options = choiceQuestions.filter(
    (q) => !LIST_QUESTIONS.includes(q.value)
  );
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
          {options.map((r) => (
            <SearchSelectItem key={r.value} value={r.value}>
              {r.label}
            </SearchSelectItem>
          ))}
        </SearchSelect>
      </div>
    </div>
  );
};
