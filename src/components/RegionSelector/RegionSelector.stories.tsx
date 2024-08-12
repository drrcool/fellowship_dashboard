import { ThemeProvider } from "@/utils/ThemeProvider";
import { RegionSelector } from "./RegionSelector";
const meta = {
  component: RegionSelector,
};
export default meta;

export const Default = () => (
  <ThemeProvider>
    <RegionSelector />
  </ThemeProvider>
);
