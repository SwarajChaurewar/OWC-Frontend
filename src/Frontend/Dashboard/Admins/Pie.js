import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["OfficeSpace", 19],
  ["Restaurant", 9],
  ["Desks", 12],
  ["Educational", 10],
  
];

export const options = {
  title: "Properties Sales",
  is3D: true,
};

export  default function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
