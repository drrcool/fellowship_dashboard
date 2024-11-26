import { Card } from "@tremor/react";
import deiResponses from "../../data/dei_responses.json";
import seeMoreResponses from "../../data/see_more_responses.json";
import { marked } from "marked";
import { ChartTitle } from "./utils/ChartTitle";
import { freeformQuestions } from "@/config/questionConfig";

marked.setOptions({
  breaks: true,
});

function convertQuoteToItalicQuotes(text: string): string {
  // Use a regular expression to find all occurrences of text within angle brackets
  return text.replace(/"([^"]+)"/g, '*"$1"*');
}

const getMarkdown = (text: string) => {
  const markdown = marked.parse(convertQuoteToItalicQuotes(text));
  return { __html: markdown };
};

export const SummarizedResponses = ({
  region,
  question,
}: {
  region: string;
  question: "dei" | "seeMore";
}) => {
  const data = question === "dei" ? deiResponses : seeMoreResponses;
  const summary = data.find((d) => d.region === region);
  const FallBack = () => {
    return (
      <div>
        No summary found for this region. Summaries are only available at the
        region-level and not at state.
      </div>
    );
  };
  const questionName = question === "dei" ? "dei_freeform" : "what_see_more";
  const subTitle = freeformQuestions.find(
    (q) => q.value === questionName
  )?.label;
  return (
    <Card>
      <ChartTitle
        title={subTitle ?? ""}
        subtitle={
          "Summary of responses.  Italicized text indicates direct quotes. A full list of responses can be found at the bottom of the page."
        }
      />
      <div className="markdown-body">
        {summary ? (
          <div dangerouslySetInnerHTML={getMarkdown(summary.summary)} />
        ) : (
          <FallBack />
        )}
      </div>
    </Card>
  );
};
