import './App.css'
import './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from './Components/Login'
import SignUpForm from './Components/SignUpForm'
import About from './Components/About'
import Contact from './Components/Contact'
import Dashboard from './Components/Dashboard'
import Blog from './Components/Blog'
import Crime from "./Components/Crime"
import AuthProvider from "./Components/AuthProvider"
import Crime_Layout from './Dashboard/Crime_Layout'
import Crime_View from './Dashboard/Crime_View'
import User_dashboard from './Components/User_dashboard'
//import Crime from './Dashboard/Crime'
import Profile from './Dashboard/Profile'
import Utilities from './Dashboard/Utilities'
//import Dashboard from './Crime_Navbar'

function App() {
  
    return(
      <AuthProvider>
     <BrowserRouter>
    
         <Routes>
           <Route path='/' element={<Layout/>}>
           <Route   index element={<Home/>} />
           <Route  path="/Login" index element={<Login/>} />
           <Route  path="/SignUpForm" index element={<SignUpForm/>} />
           <Route  path="/About" index element={<About/>} />
           <Route  path="/Contact" index element={<Contact/>} />
           <Route  path="/Dashboard" index element={<Dashboard/>} />
           <Route  path="/Blog" index element={<Blog/>} />
           <Route  path="/Crime" index element={<Crime/>} />
           <Route  path="/User_dashboard" index element={<User_dashboard/>} />
         
           </Route>
           <Route path="/" element={<Crime_Layout/>}>
            <Route path="/dashboard" element={<Crime_View/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Utilities" element={<Utilities/>}/>
          </Route>
           </Routes> 
    </BrowserRouter>
    </AuthProvider>
   )
}
export default App


