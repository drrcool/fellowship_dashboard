import { ListValueBarChart } from "../Charts/ListValueBarChart";
import SimpleBarChart from "../Charts/SimpleBarChart";
import { SimpleDonutChart } from "../Charts/SimpleDonutChart";
import {
  ContentsContainer,
  TwoColumnContainer,
} from "../Layout/ContentsContainer";

export const RecoveryExperience = ({ region }: { region: string }) => {
  return (
    <ContentsContainer>
      <TwoColumnContainer>
        <SimpleDonutChart region={region} column="currently_working_steps" />
        <SimpleDonutChart region={region} column="twelve_step_sponsor" />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <ListValueBarChart region={region} column="drugs_used" />
        <ListValueBarChart region={region} column="months_years_clean" />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <SimpleDonutChart region={region} column="have_homegroup" />
        <SimpleDonutChart region={region} column="relapse_part_of_story" />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <ListValueBarChart region={region} column="negatively_affected" />
        <ListValueBarChart region={region} column="positively_affected" />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <ListValueBarChart region={region} column="introduction_to_cma" />
        <SimpleBarChart region={region} column="felt_welcomed" />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <SimpleBarChart region={region} column="current_meeting_attendance" />
        <ListValueBarChart
          region={region}
          column="attending_other_fellowships"
        />
      </TwoColumnContainer>
    </ContentsContainer>
  );
};
