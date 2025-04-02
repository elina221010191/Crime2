import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Sun } from 'lucide-react';
import BarChart from "../Components/H2";
import "../Styles/report.css";

const LawEnforcementDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  
  // Sample data for charts
  const crimeData = [10, 18, 8, 12, 17, 10, 5, 15, 7];
  
  // Sample crime list items
  const crimeItems = [
    { id: 1, name: 'Theft' },
    { id: 2, name: 'Assault' },
    { id: 3, name: 'Vandalism' },
    { id: 4, name: 'Robbery' },
    { id: 5, name: 'Fraud' },
    { id: 6, name: 'Trespassing' },
    { id: 7, name: 'Burglary' },
    { id: 8, name: 'Drug Offenses' },
    { id: 9, name: 'DUI' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-lg text-gray-400 mb-4">Law Enforcement & Government/dashboard</h1>
        
        {/* Main Dashboard Container */}
        <div className="bg-gray-100 rounded-lg overflow-hidden text-gray-900">
          
          {/* Header */}
          <header className="bg-gray-200 p-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center">
                LOGO
              </div>
            </div>
            
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="search here..."
                className="w-full py-1 px-8 rounded-full border border-gray-300"
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
          
          {/* Main Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 bg-gray-100 p-4">
              <div className="space-y-3">
                <div className="bg-gray-900 text-white px-4 py-2 rounded">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-white mr-2"></span>
                    Dashboard
                  </div>
                </div>
                
                <div className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-gray-400 mr-2"></span>
                    Crime Categories
                  </div>
                </div>
                
                <div className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-gray-400 mr-2"></span>
                    Crime Heat Map
                  </div>
                </div>
                
                <div className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-gray-400 mr-2"></span>
                    Case Assignment & Tracking
                  </div>
                </div>
                
                <div className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-gray-400 mr-2"></span>
                    Alerts & Notifications
                  </div>
                </div>
                
                <div className="px-4 py-2">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-gray-400 mr-2"></span>
                    Reports
                  </div>
                </div>
              </div>
              
              <div className="mt-48 space-y-2">
                <button className="flex items-center w-full px-4 py-2 border border-gray-300 rounded">
                  <span className="h-3 w-3 bg-gray-400 mr-2"></span>
                  Settings
                </button>
                
                <button className="flex items-center w-full px-4 py-2 border border-gray-300 rounded">
                  <span className="h-3 w-3 bg-gray-400 mr-2"></span>
                  Logout
                </button>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex-1 p-4">
              <div className="grid grid-cols-3 gap-6">
                {/* Crime Trends Chart */}
                <div className="bg-white p-3 rounded shadow">
                  <h3 className="text-sm font-medium mb-3">Crime Trends Over Time</h3>
                  <BarChart/> 
                  <div className="h-32 flex items-end space-x-2">
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
                
                {/* Crime Distribution */}
                <div className="bg-white p-3 rounded shadow">
                  <h3 className="text-sm font-medium mb-3">Crime distribution by category</h3>
                  <div className="flex justify-center items-center h-32">
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 border-8 border-gray-900 rounded-full"></div>
                      <div className="absolute inset-2 border-8 border-gray-600 rounded-full"></div>
                      <div className="absolute inset-4 border-8 border-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Crime Reporting Stats */}
                <div className="bg-white p-3 rounded shadow">
                  <h3 className="text-sm font-medium mb-2">crime reporting stats</h3>
                  <div className="flex justify-center items-center h-32">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
                      <div 
                        className="absolute inset-0 border-8 border-t-gray-200 border-r-gray-200 border-b-gray-200 border-l-transparent rounded-full" 
                        style={{ transform: 'rotate(60deg)' }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-300">60%</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center text-xs space-x-4">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-200 mr-1"></div>
                      <span>Pending</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full border border-gray-900 mr-1"></div>
                      <span>Completed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full border border-gray-900 mr-1"></div>
                      <span>Canceled</span>
                    </div>
                  </div>
                </div>
                
                {/* Crime Lists */}
                {[0, 1, 2].map((gridIndex) => (
                  <div key={gridIndex} className="bg-gray-300 p-3 rounded shadow">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm">crime_name</h3>
                      <div className="flex space-x-1">
                        <span>•••</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[0, 1, 2].map((itemIndex) => {
                        const index = gridIndex * 3 + itemIndex;
                        return index < crimeItems.length ? (
                          <div key={itemIndex} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-4 w-4 bg-gray-900 rounded-full mr-2"></div>
                              <div className="h-2 w-32 bg-gray-900 rounded"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" className="h-3 w-3" />
                              <span>•••</span>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawEnforcementDashboard;
// CrimeDashboard.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, Bell, ChevronDown, Sun, ChevronRight } from 'lucide-react';

// const CrimeDashboard = () => {
//   const navigate = useNavigate();
//   // Sample crime data
//   const crimeData = [15, 20, 8, 10, 18, 6, 12, 14];
  
//   // Sample crime list items with real crime types and descriptions
//   const crimeItems = [
//     { id: 1, name: 'Theft', description: 'Property theft from residential areas' },
//     { id: 2, name: 'Assault', description: 'Physical altercations in public spaces' },
//     { id: 3, name: 'Vandalism', description: 'Property damage in commercial districts' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 p-1">
//       <div className="bg-gray-200 rounded-lg overflow-hidden h-full">
//         {/* ... (keep all your existing header and sidebar code) ... */}
        
//         {/* Main Content */}
//         <div className="flex-1 p-4 bg-gray-100">
//           <div className="grid grid-cols-2 gap-6">
//             {/* ... (keep your existing crime trends div) ... */}
              
//             <div>
//               <div 
//                 className="bg-gray-900 text-white p-4 rounded shadow h-48 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition"
//                 onClick={() => navigate('/submit-report')}
//               >
//                 Submit a form here
//               </div>
//             </div>
            
//             {/* ... (keep the rest of your existing code) ... */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CrimeDashboard;