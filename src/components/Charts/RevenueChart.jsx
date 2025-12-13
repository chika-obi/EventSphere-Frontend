import React from 'react'
import {CartesianGrid, Line, LineChart, XAxis,YAxis,Tooltip,ResponsiveContainer} from "recharts";
import "./RevenueChart.css"
const data = [
    {month:"Jan", revenue:4500},
    {month:"Feb", revenue:5400},
    {month:"Mar", revenue:6500},
    {month:"Apr", revenue:7200},
    {month:"May", revenue:6200},
    {month:"Jun", revenue:7800},
    {month:"Jul", revenue:8200},
    {month:"Aug", revenue:7500},
    {month:"Sept", revenue:5500},
    {month:"oct", revenue:6700}
]
const RevenueChart = () => {
  return (
    <>
    <div className='chartContainer'>
        <h3 className='chartTitle'>Revenue Overview</h3>

        <ResponsiveContainer width= "100%" height={300}>
        <LineChart data={data} className='linChat'>
        <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>
        <XAxis dataKey="month"/>

        <YAxis/>
        <Tooltip/>

         <Line
            type="monotone"
            dataKey="revenue"
            stroke="#0f7c0f"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        
        </LineChart>
        </ResponsiveContainer>
      
    </div>
    </>
  )
}

export default RevenueChart
