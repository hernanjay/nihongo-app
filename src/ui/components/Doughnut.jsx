import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Box, Text } from "@chakra-ui/react";
function DoughnutChart() {
  ChartJS.register(ArcElement);
  const data = {
    labels: ["N1", "N2", "N3", "N4", "N5"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "#388968",
          "#8FB140",
          "#CAD849",
          "#379A86",
          "#429EB0",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Box h="50px" p="15px" bg="#1aa7ac">
        <Text fontSize="lg" fontWeight="extrabold" color="whiteAlpha.900">
          Learners per Level
        </Text>
      </Box>
      <div>
        <Doughnut data={data}></Doughnut>
      </div>
    </div>
  );
}

export default DoughnutChart;
