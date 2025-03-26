import { useState } from "react";
import { Bell, Sun, User } from "lucide-react";
import "../Styles/usermanagement.css";
import { Card } from "./Card";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold">LOGO</div>
        <input
          type="text"
          placeholder="Search here..."
          className="px-4 py-2 rounded-lg text-black"
        />
        <div className="flex gap-4">
          <Sun onClick={() => setDarkMode(!darkMode)} className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </div>

      {/* Sidebar & Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-200 p-4 min-h-screen">
          <ul className="space-y-4">
            <li className="bg-black text-white p-2 rounded-lg">Dashboard</li>
            <li>Crime Categories</li>
            <li>Crime Analysis</li>
            <li>Interactive Map</li>
          </ul>
          <div className="mt-10 space-y-4">
            <button className="w-full p-2 bg-gray-400 rounded">Settings</button>
            <button className="w-full p-2 bg-gray-600 text-white rounded">Logout</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-6">
          <Card className="p-4">
            <h2 className="text-lg font-bold">Crime Trends Over Time</h2>
            <div className="h-40 bg-gray-300 mt-2" />
          </Card>

          <div className="mt-6 flex gap-6">
            <Card className="p-4 w-1/2">
              <h2 className="text-lg font-bold">Lorem Ipsum</h2>
              <div className="mt-2 space-y-2">
                <div className="p-2 bg-gray-300 rounded">Lorem Ipsum</div>
                <div className="p-2 bg-gray-300 rounded">Lorem Ipsum</div>
                <div className="p-2 bg-gray-300 rounded">Lorem Ipsum</div>
              </div>
            </Card>
            <Card className="p-4 w-1/2">
              <h2 className="text-lg font-bold">QR Code</h2>
              <div className="h-32 bg-gray-300 mt-2 flex items-center justify-center">
                QR CODE
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

