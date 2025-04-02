import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { QRCodeCanvas } from "qrcode.react";

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
      <h2 className="text-md font-semibold mb-2">Statics</h2>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" fill="#2d3f8d" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const SubmitButton = () => {
  return (
    <div className="flex justify-center mt-6">
      <button className="px-6 py-3 bg-blue-500 text-white rounded shadow">
        Submit a Form
      </button>
    </div>
  );
};

const QRCodeWidget = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center">
      <h2 className="text-lg font-bold">QR Code</h2>
      <div className="bg-gray-300 p-2 rounded flex justify-center">
        <QRCodeCanvas value="https://example.com" size={120} />
      </div>
      <p className="mt-2 text-sm text-gray-600">Scan to visit: https://example.com</p> {/* Adding text for better clarity */}
    </div>
  );
};

export { DashboardWidget, SubmitButton, QRCodeWidget };


