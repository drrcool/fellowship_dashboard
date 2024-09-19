import AgeBreakdown from "../Charts/AgeBreakdow";
import GenderBreakdown from "../Charts/GenderBreakdown/GenderBreakdown";
import SimpleBarChart from "../Charts/SimpleBarChart";
import { SimpleDonutChart } from "../Charts/SimpleDonutChart";

export const Demographics = ({ region }: { region: string }) => {
  return (
    <div className="my-10 flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <GenderBreakdown region={region} />
        <AgeBreakdown region={region} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SimpleBarChart
          region={region}
          column="ethnicity"
          title="What is your Ethnicity?"
        />
        <SimpleBarChart
          region={region}
          column="sexual_orientation"
          title="What is your sexual orientation?"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SimpleDonutChart
          region={region}
          column="education"
          title="Level of Education"
        />
        <SimpleDonutChart
          region={region}
          column="employment_status"
          title="Employment Status"
        />
      </div>
    </div>
  );
};
