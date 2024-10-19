import { useRegionData } from "@/hooks/useData";
import { Button } from "@tremor/react";
import { useState } from "react";
import { ChartTitle } from "./utils/ChartTitle";

export const IndividualResponses = ({
  region,
  question,
}: {
  region: string;
  question: "dei" | "seeMore";
}) => {
  const data = useRegionData(region);
  const questionName = question === "dei" ? "dei_freeform" : "what_see_more";
  const responses = data.map((d) => d[questionName]).filter((d) => d);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Collapse" : "Expand"}
        </Button>
        <ChartTitle
          title="Individual Responses"
          subtitle="Direct quotations from respondents. Please note, explicit language and potentially sensitive material is included."
        />
      </div>
      {isOpen && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {responses.map((response, i) => (
            <div key={i} className="p-4 border border-gray-200 rounded-lg">
              {response}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
