// import Sidebarcrime from "Sidebarcrime.jsx"
import "./Dashboard_Styles/sidebarcrime.css";
import {Link} from "react-router-dom"
function Sidebarcrime(){
return(

       <div className="container_side">
        <div className="profile2-section">
       <h1 clasName="avatar3">Crime</h1> 
        <div className="avator4">
          <h6></h6>
          </div>
          <h6></h6>
        </div>
       
        <ul className="board2-listcrime">
          <h6>NAVIGATION</h6>
          <Link to='/Statistics'>
          <li className="active2">Dashboard</li>
          </Link>
          <Link to='/Crime Categories'>
          <li className="active3">Crime Categories</li>
          </Link>
          <Link to="/Crime Analysis">
          <li>Crime Analysis</li>
          </Link>
          <Link to="/Interactive map for public awareness">
          <li>Interactive map for public awareness</li>
          </Link>
        </ul>
    </div>
)
}
export default Sidebarcrime;