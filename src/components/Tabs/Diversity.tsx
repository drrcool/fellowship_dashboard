import { SimpleDonutChart } from "../Charts/SimpleDonutChart";
import { ContentsContainer } from "../Layout/ContentsContainer";

export const Diversity = ({ region }: { region: string }) => {
  return (
    <ContentsContainer>
      <SimpleDonutChart region={region} column={"dei_feelings"} />
    </ContentsContainer>
  );
};
