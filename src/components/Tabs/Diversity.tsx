import { IndividualResponses } from "../Charts/IndividualResponses";
import { SimpleDonutChart } from "../Charts/SimpleDonutChart";
import { SummarizedResponses } from "../Charts/SummarizedResponses";
import { ContentsContainer } from "../Layout/ContentsContainer";

export const Diversity = ({ region }: { region: string }) => {
  return (
    <ContentsContainer>
      <SimpleDonutChart region={region} column={"dei_feelings"} />
      <SummarizedResponses region={region} question="dei" />
      <IndividualResponses region={region} question="dei" />
    </ContentsContainer>
  );
};
