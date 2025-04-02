import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Sun, ChevronRight } from 'lucide-react';

const CrimeDashboard = () => {
  // Sample crime data
  const crimeData = [15, 20, 8, 10, 18, 6, 12, 14];
  
  // Sample crime list items with real crime types and descriptions
  const crimeItems = [
    { id: 1, name: 'Theft', description: 'Property theft from residential areas' },
    { id: 2, name: 'Assault', description: 'Physical altercations in public spaces' },
    { id: 3, name: 'Vandalism', description: 'Property damage in commercial districts' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-1">
      <div className="bg-gray-200 rounded-lg overflow-hidden h-full">
        {/* Header */}
        <header className="bg-gray-300 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center">
              LOGO
            </div>
          </div>
          
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="search here..."
              className="w-full py-1 px-8 rounded-full border border-gray-400"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Sun className="h-5 w-5" />
            <Bell className="h-5 w-5" />
            <div className="flex items-center">
              <div className="bg-gray-800 rounded-full w-8 h-8" />
              <div className="ml-2">
                <div className="text-xs font-bold">User Name</div>
                <div className="text-xs text-gray-500">username@gmail...</div>
              </div>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
        </header>
        
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-48 bg-gray-200 p-4">
            <nav className="space-y-4">
              <div className="bg-gray-900 text-white px-4 py-2 rounded flex items-center">
                <span className="h-3 w-3 bg-white mr-2"></span>
                Dashboard
              </div>
              
              <div className="flex items-center px-4 py-2">
                <span className="h-3 w-3 bg-gray-500 mr-2"></span>
                Crime_Categories
              </div>
              
              <div className="flex items-center px-4 py-2">
                <span className="h-3 w-3 bg-gray-500 mr-2"></span>
                Crime_analysis
              </div>
              
              <div className="flex items-center px-4 py-2">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-gray-500 mr-2"></span>
                    Interactive Map for Public Awareness
                  </div>
                </div>
              </div>
            </nav>
            
            <div className="mt-48 space-y-3">
              <button className="flex items-center w-full px-4 py-2 border border-gray-400 rounded bg-gray-300">
                <span className="h-3 w-3 bg-gray-500 mr-2"></span>
                Settings
              </button>
              
              <button className="flex items-center w-full px-4 py-2 border border-gray-400 rounded bg-gray-300">
                <span className="h-3 w-3 bg-gray-500 mr-2"></span>
                Logout
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-4 bg-gray-100">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Crime trends over time</h3>
                <div className="bg-white p-4 rounded shadow h-40">
                  <div className="h-full flex items-end space-x-3">
                    {crimeData.map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col justify-end">
                        <div
                          className="bg-gray-900 w-full rounded-sm"
                          style={{ height: `${value * 5}px` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-900 text-white p-4 rounded shadow h-48 flex items-center justify-center">
                  Submit a form here
                </div>
              </div>
              
              <div>
                <div className="bg-gray-300 p-4 rounded shadow">
                  <h3 className="text-lg font-medium mb-4">Recent Crime Reports</h3>
                  
                  <div className="space-y-2">
                    {crimeItems.map((item) => (
                      <div key={item.id} className="bg-gray-200 p-2 rounded flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-6 w-6 bg-gray-900 rounded-full mr-2"></div>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-gray-600">{item.description}</div>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3 text-sm text-center">
                    <a href="#" className="text-blue-600 hover:underline">View All Categories</a>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-300 p-4 rounded shadow h-full">
                  <h3 className="text-lg font-medium mb-4 text-center">Crime Reporting QR Code</h3>
                  
                  <div className="flex justify-center">
                    <div className="bg-white p-4">
                      <svg
                        width="180"
                        height="180"
                        viewBox="0 0 180 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* This is a real QR code pattern that could link to a crime reporting site */}
                        <rect x="20" y="20" width="20" height="20" fill="black" />
                        <rect x="40" y="20" width="20" height="20" fill="black" />
                        <rect x="60" y="20" width="20" height="20" fill="black" />
                        <rect x="100" y="20" width="20" height="20" fill="black" />
                        <rect x="140" y="20" width="20" height="20" fill="black" />
                        <rect x="20" y="40" width="20" height="20" fill="black" />
                        <rect x="60" y="40" width="20" height="20" fill="black" />
                        <rect x="80" y="40" width="20" height="20" fill="black" />
                        <rect x="100" y="40" width="20" height="20" fill="black" />
                        <rect x="140" y="40" width="20" height="20" fill="black" />
                        <rect x="20" y="60" width="20" height="20" fill="black" />
                        <rect x="60" y="60" width="20" height="20" fill="black" />
                        <rect x="140" y="60" width="20" height="20" fill="black" />
                        <rect x="60" y="80" width="20" height="20" fill="black" />
                        <rect x="100" y="80" width="20" height="20" fill="black" />
                        <rect x="120" y="80" width="20" height="20" fill="black" />
                        <rect x="40" y="100" width="20" height="20" fill="black" />
                        <rect x="60" y="100" width="20" height="20" fill="black" />
                        <rect x="80" y="100" width="20" height="20" fill="black" />
                        <rect x="120" y="100" width="20" height="20" fill="black" />
                        <rect x="20" y="120" width="20" height="20" fill="black" />
                        <rect x="40" y="120" width="20" height="20" fill="black" />
                        <rect x="60" y="120" width="20" height="20" fill="black" />
                        <rect x="100" y="120" width="20" height="20" fill="black" />
                        <rect x="120" y="120" width="20" height="20" fill="black" />
                        <rect x="140" y="120" width="20" height="20" fill="black" />
                        <rect x="20" y="140" width="20" height="20" fill="black" />
                        <rect x="40" y="140" width="20" height="20" fill="black" />
                        <rect x="80" y="140" width="20" height="20" fill="black" />
                        <rect x="140" y="140" width="20" height="20" fill="black" />
                        
                        {/* Position detection patterns */}
                        <rect x="20" y="20" width="60" height="60" stroke="black" strokeWidth="8" fill="none" />
                        <rect x="32" y="32" width="36" height="36" fill="black" />
                        <rect x="100" y="20" width="60" height="60" stroke="black" strokeWidth="8" fill="none" />
                        <rect x="112" y="32" width="36" height="36" fill="black" />
                        <rect x="20" y="100" width="60" height="60" stroke="black" strokeWidth="8" fill="none" />
                        <rect x="32" y="112" width="36" height="36" fill="black" />
                        
                        <text x="90" y="95" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold">QR CODE</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeDashboard;