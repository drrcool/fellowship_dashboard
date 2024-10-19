import { Card } from "@tremor/react";
import deiResponses from "../../data/dei_responses.json";
import seeMoreResponses from "../../data/see_more_responses.json";

export const SummarizedResponses = ({
  region,
  question,
}: {
  region: string;
  question: "dei" | "seeMore";
}) => {
  const data = question === "dei" ? deiResponses : seeMoreResponses;
  const summary = data.find((d) => d.region === region);
  console.log(summary);

  return (
    <Card>
      <div> Summarized Responses will go here</div>
    </Card>
  );
};
