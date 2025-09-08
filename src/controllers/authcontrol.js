// src/controllers/authController.js
const API_BASE = "http://prod.qpocabs.com/v2/auth/admin/login";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }), // 👈 check if backend wants different keys
    });

    const data = await response.json();
    console.log("📩 Login API Response:", data); // 👀 log full response

    if (!response.ok) {
      throw new Error(data.message || "Invalid username or password");
    }

    return data;
  } catch (error) {
    console.error("❌ Login API Error:", error);
    throw error;
  }
};
