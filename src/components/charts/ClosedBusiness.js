import React from "react";
import { Bar } from "react-chartjs-2";
import ContentLoader from "react-content-loader";

const ClosedBusiness = ({ monthValues }) => {
  const BarChart = (props) => {
    return (
      <ContentLoader width={200} height={200} viewBox="0 0 200 200" {...props}>
        <rect x="0" y="160" rx="0" ry="0" width="25" height="40" />
        <rect x="30" y="145" rx="0" ry="0" width="25" height="55" />
        <rect x="60" y="126" rx="0" ry="0" width="25" height="74" />
        <rect x="90" y="80" rx="0" ry="0" width="25" height="120" />
        <rect x="120" y="142" rx="0" ry="0" width="25" height="58" />
      </ContentLoader>
    );
  };

  BarChart.metadata = {
    name: "Phuong Dao",
    github: "dao-phuong",
    description: "Bar Chart",
    filename: "BarChart",
  };

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "#Closed business",
        data: monthValues,
        backgroundColor: [
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
          "rgba(40, 188, 173, 0.5)",
        ],
        borderColor: [
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
          "rgba(40, 188, 173, 1)",
        ],
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "rgba(204, 204, 204,0.1)",
          },
        },
      ],
    },
    legend: {
      display: true,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="the-bar-chart">
      <Bar height={500} data={data} options={options} />
    </div>
  );
};

export default ClosedBusiness;
