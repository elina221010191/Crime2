import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Notify} from "notiflix";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Login from "./Login";
const Register=({HandleSignUpForm})=>
{
    const [userName, setLastname] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
     const [message, setMessage] = useState("");
     const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
const [modal,useModal]=useState(false);
const HandleLoginForm=()=>
    {
        useModal(!modal)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:4000/crime/user/register", {
                userName,
                userEmail,
                userPassword,
            });
            Notify.success(response.data.message);
                 
        } catch (error) {
            Notify.success(error.response?.data?.message || "SignUp Failed")
        }
        finally{
            setLoading(false);
        }
    };
    const styles={
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black transparent background
            zIndex: 1000, // Ensures it's on top of everything
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          modal: {
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "600px",
            maxWidth: "90%",
          },
    }
    return(
        <div style={styles.overlay}>
            {modal && <Login HandleLoginForm={HandleLoginForm} />}
            <div style={styles.modal}>
            <div style={{display:"flex",gap:"420px",flexDirection:"row",marginBottom:"20px"}}><div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#3B82F6',
          }}
        >
          Register
        </div><div><IoClose onClick={HandleSignUpForm} style={{marginTop:"0px", fontSize: "30px",cursor:"pointer"}}/></div></div>
            
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Name:</span><input type="text" placeholder="Enter your Name" value={userName} onChange={(e)=>setLastname(e.target.value)} style={{width:"400px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Email:</span><input type="email" placeholder="Enter your Email" value={userEmail} onChange={(e)=>setEmail(e.target.value)} style={{width:"400px",marginLeft:"40px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Password:</span>
                 <input   type="password" style={{ paddingRight: "30px" ,width:"380px",marginLeft:"10px"}} placeholder="Password" value={userPassword} onChange={(e)=>setPassword(e.target.value)}  required/>
          </div>
      
              <div style={{display:"flex",gap:"20px"}}> <button type="submit" disabled={loading} style={{width:"200px",marginLeft:"0px",backgroundColor:"#3B82F6",border:"none"}}>SIGN UP</button> <span style={{marginTop:"25px",color:"black"}}>Already have account<span onClick={HandleLoginForm} style={{color:"#3B82F6",marginLeft:"5px",background:"none",cursor:"pointer"}}>Login</span></span></div> 
            </form>
            {loading && <p>Loading...</p>}
           
            </div>
        </div>
    )
}
export default Register