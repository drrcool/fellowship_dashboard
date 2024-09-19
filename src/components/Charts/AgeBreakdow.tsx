import { SimpleDonutChart } from "./SimpleDonutChart";

const AgeBreakdown = ({ region }: { region: string }) => {
  return (
    <SimpleDonutChart region={region} column="age" title="What is your age?" />
  );
};
export default AgeBreakdown;
