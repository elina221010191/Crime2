import React, { useState } from 'react';
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import Register from './SignUpForm';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {Notify} from "notiflix"
const Login = ({ HandleLoginForm }) => {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [model, useModel] = useState(false);  // For registration form modal

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/crime/user/login", {
        userEmail,
        userPassword,
      });
     Notify.success("Login successful")
      const token = response.data.token;
      localStorage.setItem("token", token);
      const decoded = jwt_decode(token);
      const userRole = decoded.userRole;
      const userName=decoded.Name;
      localStorage.setItem("user", JSON.stringify(response.data.user));
       // save name in localStorage
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
      // Close modal first
      HandleLoginForm();

      // Navigate based on the user role
      if (userRole === "admin") {
        navigate('/Admin_Dashboard');
      } else if (userRole === "user") {
        navigate('/');
      } else {
        Notify.success("You are not allowed to explore this platform");
      }

    } catch (error) {
      Notify.success(error.response?.data?.message || 'Login Failed');
    } finally {
      setLoading(false);
    }
  };

  const HandleSignUpForm = () => {
    useModel((prev) => !prev);
  };

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "500px",
      maxWidth: "90%",
    },
  };

  return (
    <div style={styles.overlay}>
      {model && <Register HandleSignUpForm={HandleSignUpForm} />}
      <div style={styles.modal}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ color: '#3B82F6' }}>Login</h2>
          <IoClose onClick={HandleLoginForm} style={{ cursor: "pointer", fontSize: "1.5rem" }} />
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', color: '#718096', marginBottom: '0.5rem' }}>Email</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: '300px',
                padding: '0.5rem 1rem',
                border: '1px solid #cbd5e0',
                borderRadius: '0.375rem',
                outline: 'none',
                marginTop: '0.25rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', color: '#718096', marginBottom: '0.5rem' }}>Password</label>
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: '300px',
                padding: '0.5rem 1rem',
                border: '1px solid #cbd5e0',
                borderRadius: '0.375rem',
                outline: 'none',
                marginTop: '0.25rem',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '300px',
              padding: '0.75rem',
              backgroundColor: '#3B82F6',
              color: 'white',
              borderRadius: '0.375rem',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <p style={{ marginTop: '1rem', textAlign: 'center', color: '#718096' }}>
          Don’t have an account?{' '}
          <button
            onClick={HandleSignUpForm}
            style={{ color: '#3B82F6', background: "none", border: "none", cursor: "pointer" }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;