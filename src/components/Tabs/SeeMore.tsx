import { IndividualResponses } from "../Charts/IndividualResponses";
import { SummarizedResponses } from "../Charts/SummarizedResponses";
import { ContentsContainer } from "../Layout/ContentsContainer";

export const SeeMore = ({ region }: { region: string }) => {
  return (
    <ContentsContainer>
      <SummarizedResponses region={region} question="seeMore" />
      <IndividualResponses region={region} question="seeMore" />
    </ContentsContainer>
  );
};
