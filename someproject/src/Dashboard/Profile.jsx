// import React from 'react'
// import './Dashboard_Styles/dashboardview.css'
// import { TbHandClick } from "react-icons/tb";
// import MoveChart from './MoveChartt';
// import LineChartGraph from './LineChart';
// import CustomerOrderTable from './TableChart'
// import ThemeProvider from './DarkMode'
// import ReactDOM from 'react-dom';
// import './Dashboard_Styles/darkmode.css';
// import TwoChart from './TwoC'
// import {Link} from 'react-router-dom'

// function Profile(){
//     return(
//         <div className="view">
//              <ThemeProvider/>
//             {/* <div className="content1"><h3>Hello John Doe</h3>
//             <h6>Nice day to work!</h6></div> */}
//             <div className="content2"><h3>Profile Growth</h3>
//         <h6>Overall Information!</h6></div>
//         <div className="move">
//             <LineChartGraph/>
//             <MoveChart/>
//             </div>
//             </div>
//     )
// }
// export default Profile;
import React from 'react';
import {Link} from 'react-router-dom'
import './Dashboard_Styles/profile.css'; // We'll define this CSS file below

const Profile = () => {
  // This would typically come from an API or props
  const user = {
    name: 'John Doe',
    username: '@janedoe',
    avatar: 'https://via.placeholder.com/150',
    bio: 'Frontend Developer | React Enthusiast | Coffee Lover',
    location: 'San Francisco, CA',
    stats: {
      posts: 42,
      followers: 1024,
      following: 256
    }
  };

  return (
    <div className="profile-container">
         <ThemeProvider/>
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.avatar} alt={`${user.name}'s avatar`} />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-username">{user.username}</p>
          <p className="profile-location">{user.location}</p>
          <p className="profile-bio">{user.bio}</p>
        </div>
      </div>
      
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-value">{user.stats.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{user.stats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{user.stats.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
      
      <div className="profile-actions">
        <button className="action-button primary">Follow</button>
        <button className="action-button secondary">Message</button>
      </div>
    </div>
  );
};

export default Profile;