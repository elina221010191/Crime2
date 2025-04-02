import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 40 },
  { name: "B", value: 80 },
  { name: "C", value: 20 },
  { name: "D", value: 60 },
  { name: "E", value: 50 },
];

const DashboardWidget = () => {
  return (
    <div className="p-3 bg-gray-100 rounded-xl shadow-md w-48 flex flex-col items-center">
      {/* <h2 className="text-md font-semibold mb-2">Statics</h2> */}
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" fill="#2d3f8d" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow"> */}
        {/* Submit a Form Here */}
      {/* </button> */}
    </div>
  );
};
export default DashboardWidget;

