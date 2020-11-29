import React from "react";
import "./Camembert.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";


const Camembert = () => {
  const data = [
    { name: "A7", Usagers: 20000000 },
    { name: "A86", Usagers: 15000000 },
    { name: "A1", Usagers: 10000000 },
    { name: "A6", Usagers: 5000000 },
    { name: "A4", Usagers: 5000000 },
    { name: "Périph", Usagers: 50000000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Fréquentation des routes</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="Usagers"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#DC143C"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Usagers" fill="#DC143C" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Camembert;