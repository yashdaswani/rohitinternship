import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here
    if (!validatePanNumber(panNumber)) {
      setError("Invalid PAN Number");
      return;
    }

    setError("");

    console.log("Username:", username);
    console.log("PAN Number:", panNumber);
    console.log("File:", file);

    setUsername("");
    setPanNumber("");
    setFile(null);

    toast("Submitted!");
  };

  const validatePanNumber = (panNumber) => {
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    return panRegex.test(panNumber);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              id="panNumber"
              value={panNumber}
              onChange={handlePanNumberChange}
              required
            />
            <label htmlFor="panNumber">PAN Number:</label>
          </div>
          <div className="user-box">
            <label>Upload File</label>
            <input
              type="file"
              className="upload-button"
              onChange={handleFileChange}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <a href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
