export type ChildQuestion = SelectQuestion & {
  parent: string;
  condition: (value: string) => boolean;
};

export type SelectQuestion = {
  label: string | React.ReactNode;
  value: string;
  options: string[];
};

export type Question = SelectQuestion | ChildQuestion;

export type SurveyData = {
  title: string;
  questions: Question[];
};
