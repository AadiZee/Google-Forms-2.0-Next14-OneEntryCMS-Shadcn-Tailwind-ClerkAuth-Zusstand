import BarChartComponent from "@/components/BarChartComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchAllFormsData, fetchFormById } from "@/lib/data";
import {
  getIndividualResponses,
  getNumberOfResponses,
  getResponses,
} from "@/lib/utils";

const ResponsesPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const formsData = await fetchAllFormsData();
  const form = await fetchFormById(id);
  const responses = getResponses(formsData, id);

  //@ts-ignore
  const questions = form.attributes.map((attr) => ({
    ...attr,
    numberOfResponses: getNumberOfResponses(responses, attr.marker),
    responses: getIndividualResponses(responses, attr.marker),
  }));

  return (
    <div className="space-y-3">
      {/* @ts-ignore */}
      {questions.map((question) => (
        <Card key={question.marker}>
          <CardHeader>
            <CardTitle className="font-normal text-base">
              {question.localizeInfos.title}
            </CardTitle>
            <CardDescription className="text-xs">
              {question.numberOfResponses}
              {question.numberOfResponses === 1 ? "Response" : "Responses"}
            </CardDescription>
            <CardContent>
              {question.numberOfResponses > 0 ? (
                <BarChartComponent responses={question.responses} />
              ) : (
                "No responses yet for this question"
              )}
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default ResponsesPage;
