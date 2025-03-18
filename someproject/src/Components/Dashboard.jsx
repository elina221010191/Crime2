import React, { useState } from 'react';
import "../Styles/dashboard.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

const Dashboard = () => {
  // Sample crime data
  const [crimeData, setCrimeData] = useState([
    { month: 'Jan', theft: 45, assault: 28, burglary: 19, fraud: 37 },
    { month: 'Feb', theft: 52, assault: 23, burglary: 15, fraud: 41 },
    { month: 'Mar', theft: 49, assault: 31, burglary: 22, fraud: 39 },
    { month: 'Apr', theft: 60, assault: 25, burglary: 18, fraud: 36 },
    { month: 'May', theft: 55, assault: 29, burglary: 14, fraud: 43 },
    { month: 'Jun', theft: 48, assault: 27, burglary: 21, fraud: 45 },
  ]);

  // Calculate totals and trends
  const currentMonthData = crimeData[crimeData.length - 1];
  const previousMonthData = crimeData[crimeData.length - 2];
  
  const calculateTotal = (data) => {
    return data.theft + data.assault + data.burglary + data.fraud;
  };
  
  const currentTotal = calculateTotal(currentMonthData);
  const previousTotal = calculateTotal(previousMonthData);
  const percentChange = ((currentTotal - previousTotal) / previousTotal * 100).toFixed(1);
  const isIncreasing = currentTotal > previousTotal;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title ">Crime Statistics Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="section-title">
        <div className="card-grid ">
          <div className="card">
            <h3 className="card-header">Total Incidents</h3>
            <AlertCircle size={20} className="card-title " />
          </div>
          <p className="card-header">{currentTotal}</p>
          <div className="card-trend">
            {isIncreasing ? (
              <>
                <TrendingUp size={16} className="card-title" />
                <span className="subtitle">{percentChange}% from last month</span>
              </>
            ) : (
              <>
                <TrendingDown size={16} className="subtitle" />
                <span className="subtitle">{Math.abs(percentChange)}% from last month</span>
              </>
            )}
          </div>
        </div>
        
        <div className="card-grid">
          <div className="card">
            <h3 className="card-header">Theft</h3>
            <AlertCircle size={20} className="card-title" />
          </div>
          <p className="card-header">{currentMonthData.theft}</p>
          <p className="card-title">Most common crime type</p>
        </div>
        
        <div className="card-grid">
          <div className="card">
            <h3 className="card-header">Assault</h3>
            <AlertCircle size={20} className="" />
          </div>
          <p className="text-3xl font-bold mt-2">{currentMonthData.assault}</p>
          <p className="text-sm text-gray-500 mt-2">Second most common</p>
        </div>
        
        <div className="card-grid">
          <div className="card">
            <h3 className="card-header">Hotspot Areas</h3>
            <AlertCircle size={20} className="text-purple-500" />
          </div>
          <p className="text-3xl font-bold mt-2">3</p>
          <p className="text-sm text-gray-500 mt-2">Downtown, East Side, North Park</p>
        </div>
      </div>
      
      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Crime Trends (Last 6 Months)</h2>
        <div className="h-64">
          {/* <ResponsiveContainer width="100%" height="100%"> 
            <BarChart data={crimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="theft" fill="#f87171" name="Theft" />
              <Bar dataKey="assault" fill="#fbbf24" name="Assault" />
              <Bar dataKey="burglary" fill="#60a5fa" name="Burglary" />
              <Bar dataKey="fraud" fill="#a78bfa" name="Fraud" />
            </BarChart>
          </ResponsiveContainer> */}
        </div>
      </div>
      
      {/* Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Incidents</h2>
          <div className="flex items-center text-blue-500">
            <Table size={16} className="mr-1" />
            <span className="text-sm">View Full Report</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 28, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Theft</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Downtown</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Solved</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 27, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Assault</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">East Side</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 25, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fraud</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">North Park</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Unsolved</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 23, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Burglary</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Downtown</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Solved</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

