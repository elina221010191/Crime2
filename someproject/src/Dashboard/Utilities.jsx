import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

const Utilities = () => {
  // Sample data - in a real app, this would come from your backend
  const Card = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "$54,000",
      icon: DollarSign,
      trend: "+12%",
    },
    {
      title: "Orders",
      value: "845",
      icon: ShoppingCart,
      trend: "+5%",
    },
    {
      title: "Customers",
      value: "1,234",
      icon: Users,
      trend: "+18%",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: TrendingUp,
      trend: "+2%",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    <span className="text-sm text-green-500">{stat.trend}</span>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Sales Chart */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Monthly Sales</CardTitle>
        </CardHeader>
        {/* <CardContent> */}
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        {/* </CardContent> */}
      </Card>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Order ID</th>
                  <th className="p-2 text-left">Customer</th>
                  <th className="p-2 text-left">Product</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">#12345</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">Gaming Mouse</td>
                  <td className="p-2">$89.99</td>
                  <td className="p-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Delivered</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">#12346</td>
                  <td className="p-2">Jane Smith</td>
                  <td className="p-2">Mechanical Keyboard</td>
                  <td className="p-2">$159.99</td>
                  <td className="p-2"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Processing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Utilities;