import { useData } from "@/hooks/useData";
import { Checkbox, ListItemText, MenuItem, Select } from "@mui/material";

export const ResponseSelector = ({
  question,
  responses,
  setResponses,
}: {
  question: string;
  responses: string[];
  setResponses: (responses: string[]) => void;
}) => {
  const data = useData();
  if (question === "response_rate") return null;
  const values = data
    .flatMap((d) => d[question as keyof typeof d])
    .filter((d) => d !== null);
  const options = Array.from(new Set(values));
  return (
    <div className="flex flex-col gap-2 justify-start">
      <div>
        <p className="font-bold">What Responses to Include?:</p>
      </div>
      <div>
        <Select
          style={{ width: "100%" }}
          multiple
          value={responses}
          onChange={(e) => {
            const value = Array.isArray(e.target.value)
              ? e.target.value
              : [e.target.value];
            setResponses(value);
          }}
          renderValue={(selected) => selected.join(", ")}
        >
          {options.map((r) => (
            <MenuItem key={r} value={r}>
              <Checkbox checked={responses.includes(r)} />
              <ListItemText primary={r} />
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
