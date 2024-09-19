import AgeBreakdown from "../Charts/AgeBreakdow";
import GenderBreakdown from "../Charts/GenderBreakdown/GenderBreakdown";
import SimpleBarChart from "../Charts/SimpleBarChart";
import { SimpleDonutChart } from "../Charts/SimpleDonutChart";
import {
  ContentsContainer,
  TwoColumnContainer,
} from "../Layout/ContentsContainer";

export const Demographics = ({ region }: { region: string }) => {
  return (
    <ContentsContainer>
      <TwoColumnContainer>
        <GenderBreakdown region={region} />
        <AgeBreakdown region={region} />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <SimpleBarChart region={region} column="ethnicity" />
        <SimpleBarChart region={region} column="sexual_orientation" />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <SimpleDonutChart region={region} column="education" />
        <SimpleDonutChart region={region} column="employment_status" />
      </TwoColumnContainer>
    </ContentsContainer>
  );
};
