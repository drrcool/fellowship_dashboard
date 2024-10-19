import { SummarizedResponses } from "../Charts/SummarizedResponses";
import { ContentsContainer } from "../Layout/ContentsContainer";

export const SeeMore = ({ region }: { region: string }) => {
  return (
    <ContentsContainer>
      <SummarizedResponses region={region} question="seeMore" />
    </ContentsContainer>
  );
};
