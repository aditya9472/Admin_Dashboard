import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login
    login({ email });
    navigate("/dashboard");
  };

  const handleSocialLogin = (provider) => {
    // Dummy social login
    login({ email: provider + "@example.com" });
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <div className="login-title">Login</div>
        <input
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Login
        </button>
        <div style={{ margin: "1rem 0" }}>
          <span>or login with</span>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "0.5rem" }}>
            <span title="Google" style={{ cursor: "pointer" }} onClick={() => handleSocialLogin("google")}> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width="32" height="32" />
            </span>
            <span title="Facebook" style={{ cursor: "pointer" }} onClick={() => handleSocialLogin("facebook")}> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" width="32" height="32" />
            </span>
            <span title="Github" style={{ cursor: "pointer" }} onClick={() => handleSocialLogin("github")}> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" width="32" height="32" />
            </span>
          </div>
        </div>
        <div
          className="login-link"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign up
        </div>
      </form>
    </div>
  );
};

export default Login;
