import { ConditionalDonutChart } from "../Charts/ConditionalDonutChart";
import { SimpleDonutChart } from "../Charts/SimpleDonutChart";
import {
  ContentsContainer,
  TwoColumnContainer,
} from "../Layout/ContentsContainer";

export const HospitalsAndInstitutions = ({ region }: { region: string }) => {
  return (
    <ContentsContainer>
      <TwoColumnContainer>
        <SimpleDonutChart region={region} column="ever_been_incarcerated" />
        <ConditionalDonutChart
          region={region}
          column="access_to_meetings_incarcerated"
          filterColumn="ever_been_incarcerated"
          filterValue="Yes"
        />
      </TwoColumnContainer>
      <TwoColumnContainer>
        <SimpleDonutChart
          region={region}
          column="residential_treatment_experience"
        />
        <ConditionalDonutChart
          region={region}
          column="cma_meetings_in_residential"
          filterColumn="residential_treatment_experience"
          filterValue="Yes"
        />
      </TwoColumnContainer>
    </ContentsContainer>
  );
};
