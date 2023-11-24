import { Bar } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

function ChartComp() {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const data = {
    labels: ["N1", "N2", "N3", "N4", "N5"],
    datasets: [
      {
        axis: "x",
        label: "Number of Learners",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "#38A169",
        borderColor: "#D6BCFA",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x",
  };

  return (
    <div>
      <Box h="50px" p="15px" bg="blue.800">
        <Text fontSize="lg" fontWeight="extrabold" color="whiteAlpha.900">
          Learners per Level
        </Text>
      </Box>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

export default ChartComp;
