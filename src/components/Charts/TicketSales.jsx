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
   { name: "Mon", value: 30 },
   { name: "Tue", value: 85 },
   { name: "Wed", value: 45 },
   { name: "Thur", value: 70 },
   { name: "Fri", value: 90 },
   { name: "Sat", value: 120 },
];

const COLORS = ["#aedf33", "#00b460", "#3fa7ff", "#032313","#b1b1b1","#323232"];


const TicketSales = () => {
  return (
    <>
      <div className="eventChartContainer">
      <h3 className="chartHeading">Ticket Sales</h3>

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

export default TicketSales

