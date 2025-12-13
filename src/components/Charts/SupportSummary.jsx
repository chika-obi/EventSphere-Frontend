import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./SupportSummary.css";

const data = [
  { name: "Pending", value: 30 },
  { name: "Resolved", value: 85 },
  { name: "Open", value: 45 },
  { name: "Closed", value: 70 },
];


const SupportSummary = () => {
  return (
    <>
      <div className="supportContainer">
      <h3 className="supportHeading">Support Summary</h3>

      <div className="chartWrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#000" }} />
            <YAxis tick={{ fill: "#000" }} />
            <Tooltip
              contentStyle={{ background: "#032313", borderRadius: "8px", border: "none" }}
              labelStyle={{ color: "#000" }}
            />
            <Bar dataKey="value" fill="#aede33" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  )
}

export default SupportSummary
