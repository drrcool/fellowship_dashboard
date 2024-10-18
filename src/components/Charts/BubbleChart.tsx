import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useRegionData } from "@/hooks/useData";

const processResponses = (responses: string[]): { [key: string]: number } => {
  const wordCount: { [key: string]: number } = {};
  responses.forEach((response) => {
    const words = response.toLowerCase().split(/\W+/);
    words.forEach((word) => {
      if (word) {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });
  });
  return wordCount;
};

ChartJS.register(...registerables);

interface BubbleChartProps {
  region: string;
  column: string;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ region, column }) => {
  const regionData = useRegionData(region);
  const data = processResponses(
    regionData
      .map((d) => d[column as keyof typeof d] as string)
      .filter((d) => d != null)
  );

  const chartData = {
    datasets: Object.keys(data).map((key, index) => ({
      label: key,
      data: [{ x: index, y: data[key], r: data[key] }],
      backgroundColor: `rgba(75, 192, 192, 0.2)`,
      borderColor: `rgba(75, 192, 192, 1)`,
      borderWidth: 1,
    })),
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bubble data={chartData} options={options} />;
};

export default BubbleChart;
