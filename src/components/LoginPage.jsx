import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/loginbackground.png";
import { login } from "../controllers/authcontrol"; // import controller

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);

      if (data.login?.accessToken) {
        localStorage.setItem("token", data.login.accessToken);
        localStorage.setItem("user", JSON.stringify(data.login.adminProfile));
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Login failed");
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
              width: "400px",
              height: "40px",
              margin: "20px",
              padding: "0 10px",
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "400px",
              height: "40px",
              margin: "20px",
              padding: "0 10px",
            }}
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
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

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
  );
}

export default LoginPage;
