import React, { useState } from "react";
import "./Auth.css";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("login==> ", name, email, password);
      toast.success("login successfully");
      navigate("/profile");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="card">
          <h2>Login</h2>
          <p>please enter your email & password</p>
          <div className="form-group mb-3"></div>
          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            disabled={!email || !password}
            onClick={handleSubmit}
          >
            LOGIN
          </button>
          <p className="mt-3">
            {" "}
            Not A user ? <NavLink to="/register">Register here!</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;