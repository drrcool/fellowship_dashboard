import { Survey } from "@/components/Survey/Survey";

const SurveyPage = async ({
  params,
}: {
  params: Promise<{ surveyName: string }>;
}) => {
  const { surveyName } = await params;

  return <Survey surveyName={surveyName} />;
};
export default SurveyPage;
