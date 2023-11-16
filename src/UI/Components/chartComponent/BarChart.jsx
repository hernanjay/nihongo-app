//import React from 'react';
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

//const DATA_COUNT = 7;
//const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

//const labels = Utils.months({count: 7});
const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      axis: "y",
      label: "369",
      data: [10, 12, 14],
      backgroundColor: "aqua",
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
  // type: "bar",
  // data: data,
  indexAxis: "y",
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const BarChart = () => <Bar data={data} options={options} />;

export default BarChart;
