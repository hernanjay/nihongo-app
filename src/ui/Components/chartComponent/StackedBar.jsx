import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: ["Mon", "Tue", "Wed"],
  datasets: [
    {
      label: "369",
      data: [3, 6, 9],
      backgroundColor: "aqua",
      borderColor: "black",
      borderWidth: 1,
    },
    {
      label: "370",
      data: [1, 5, 10],
      backgroundColor: "red",
      borderColor: "black",
      borderWidth: 1,
    },
    // {
    //   label: 'Dataset 2',
    //   data: Utils.numbers(NUMBER_CFG),
    //   borderColor: Utils.CHART_COLORS.blue,
    //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    // }
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const StackedBar = () => <Bar data={data} options={options} />;

export default StackedBar;
