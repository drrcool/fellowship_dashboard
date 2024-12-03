import { DataPoint, useData } from "@/hooks/useData";
import { getQuestionData } from "./NorthAmericaChart";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

const responseCountColumns: GridColDef[] = [
  { field: "geo", headerName: "State/Province", width: 200 },
  {
    field: "population",
    headerName: "Response Count",
    width: 300,
    type: "number",
  },
];

const questionColumns: GridColDef[] = [
  { field: "geo", headerName: "State/Province", width: 200 },
  {
    field: "count",
    headerName: "Matching Response Count",
    width: 200,
    type: "number",
  },
  {
    field: "population",
    headerName: "Total Response Count",
    width: 200,
    type: "number",
  },
  {
    field: "rate",
    headerName: "% of Responses in State",
    width: 300,
    type: "number",
  },
];

const getTableData = (
  data: DataPoint[],
  question: string,
  responses: string[]
) => {
  const { values } = getQuestionData(data, question, responses);

  const output = Object.entries(values)
    .map(([geo, { count, population, rate }], index) => ({
      id: index,
      geo,
      count,
      population,
      rate: rate !== null ? (100.0 * rate).toFixed(1) : null,
    }))
    .sort((a, b) => {
      return (b.population ?? 0) - (a.population ?? 0);
    });

  return output;
};

export const TableView = ({
  question,
  responses,
}: {
  question: string;
  responses: string[];
}) => {
  const data = useData();
  const values = getTableData(data, question, responses);

  const width = question === "response_rate" ? 500 : 900;
  const columns =
    question === "response_rate" ? responseCountColumns : questionColumns;

  return (
    <Paper sx={{ width }}>
      <DataGrid rows={values} columns={columns} />
    </Paper>
  );
};
