import { GenderBreakdown } from "../Charts/GenderBreakdown/GenderBreakdown";

export const Demographics = ({ region }: { region: string }) => {
  return (
    <div>
      <GenderBreakdown region={region} />
    </div>
  );
};
