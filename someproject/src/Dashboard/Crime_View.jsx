import { Card } from "../Components/Card";
import MoveChart from '../Components/MoveChartt';
import LineChartGraph from '../Components/LineChart';
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
       
      {/* Main Content */}
      <div className="w-full">
        <Card className="p-4">
          <h2 className="text-lg font-bold">Crime Trends Over Time</h2>
      
        
          <button className="read-more"><Link to="/User_dashboard" style={{textDecoration:"none"}}>Submit a form here </Link></button>
         
          <div className="h-40 bg-gray-300 mt-2"/>
          <LineChartGraph/>
          {/* <MoveChart/> */}
         
         
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
  );
}



