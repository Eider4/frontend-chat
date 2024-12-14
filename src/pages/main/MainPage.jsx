import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/chat">Chat</Link>
    </div>
  );
}
