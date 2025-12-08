import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./EventChart.css";

const data = [
  { name: "Tickets Sold", value: 430 },
  { name: "Tickets Remaining", value: 170 },
  { name: "VIP Sales", value: 90 },
  { name: "Regular Sales", value: 340 },
];

const COLORS = ["#aedf33", "#00b460", "#3fa7ff", "#032313"];


const EventChart = () => {
  return (
    <>
      <div className="eventChartContainer">
      <h3 className="chartHeading">Event Performance</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default EventChart
