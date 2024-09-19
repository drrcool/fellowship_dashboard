import { SimpleDonutChart } from "../SimpleDonutChart";

const GenderBreakdown = ({ region }: { region: string }) => {
  return (
    <SimpleDonutChart
      region={region}
      column="gender"
      title="How do you identify your gender?"
    />
  );
};
export default GenderBreakdown;
