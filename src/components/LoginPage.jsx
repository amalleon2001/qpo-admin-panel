import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/loginbackground.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://prod.qpocabs.com/v2/auth/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Extract from your API response
      const { accessToken, adminProfile } = data.login;

      if (accessToken) {
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(adminProfile));

        navigate("/dashboard");
      } else {
        setError("Invalid login response");
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        padding: "25px",
        backgroundColor: "#1C72FF",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Login Page
      </h2>
      <div>
        <form
          className="login-form"
          onSubmit={handleLogin}
          style={{
            maxWidth: "500px",
            margin: "250px 50px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              backgroundColor: "white",
              color: "black",
              width: "400px",
              height: "40px",
              padding: "0px 10px",
              display: "block",
              margin: "20px",
            }}
            name="username"
            id="user"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "white",
              width: "400px",
              color: "black",
              height: "40px",
              padding: "0px 10px",
              display: "block",
              margin: "20px",
            }}
            name="password"
            id="password"
          />
          <button
            type="submit"
            style={{
              width: "400px",
              height: "50px",
              backgroundColor: "#0C6CFC",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              borderRadius: "10px",
              margin: "20px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
          )}
        </form>

        <div>
          <img
            src={BackgroundImage}
            alt="Background"
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              width: "40%",
              height: "80vh",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
