import React, { useContext, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { AppContext } from "../context";
import { Box, Heading } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart() {
  const { txnData, txnIdList }: any = useContext(AppContext);
  let values = Object.values(txnData);
  let time: any = [];

  const timeStamp = values.map((value: any) => {
    let stamp = new Date(value.time * 1000);
    let hours: any = stamp.getHours();
    let minutes = "0" + stamp.getMinutes();
    let t = hours + "." + minutes.substr(-2);

    time.push(Number(t));
    return hours + ":" + minutes.substr(-2);
  });
  const sortedTimeStamp = timeStamp.sort((a, b) => {
    return a > b ? 1 : a === b ? 0 : -1;
  });
  console.log(time);

  const options = {
    responsive: true,
    tooltip: {
      enabled: true,
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      // title: {
      //   display: true,
      //   text: "Incoming transactions",
      // },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
        },
        max: txnIdList?.length + 1,
        min: 0,
        ticks: {
          stepSize: 2,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const labels = sortedTimeStamp;
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: time,
        borderColor: "rgb(255, 99, 132)",
        fill: true,
        pointRadius: 0,
        tension: 0.5,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Box w={"100%"}>
      <Heading color={"brandGrey.400"} fontSize={"1rem"}>
        Incoming transactions
      </Heading>
      <Line options={options} data={data} />
    </Box>
  );
}
