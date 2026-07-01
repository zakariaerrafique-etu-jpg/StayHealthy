import React, { useState } from "react";


localStorage.setItem(
  "user",
  JSON.stringify({
    email: formData.email
  })
);

navigate("/");
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("https://api.stayhealthy/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };
  

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

