import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Dummy signup
    login({ email });
    navigate("/dashboard");
  };

  const handleSocialSignup = (provider) => {
    // Dummy social signup
    login({ email: provider + "@example.com" });
    navigate("/dashboard");
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSignup}>
        <div className="signup-title">Sign Up</div>
        <input
          type="email"
          className="signup-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <div style={{ margin: "1rem 0" }}>
          <span>or sign up with</span>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "0.5rem" }}>
            <span title="Google" style={{ cursor: "pointer" }} onClick={() => handleSocialSignup("google")}> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width="32" height="32" />
            </span>
            <span title="Facebook" style={{ cursor: "pointer" }} onClick={() => handleSocialSignup("facebook")}> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" width="32" height="32" />
            </span>
            <span title="Github" style={{ cursor: "pointer" }} onClick={() => handleSocialSignup("github")}> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" width="32" height="32" />
            </span>
          </div>
        </div>
        <div
          className="signup-link"
          onClick={() => navigate("/")}
        >
          Already have an account? Login
        </div>
      </form>
    </div>
  );
};

export default Signup;
