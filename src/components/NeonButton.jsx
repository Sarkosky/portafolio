// NeonButton.jsx
import React from "react";
import '../styles/contactMeButton.css'

export default function NeonButton({ label, onClick }) {
  return (
    <button className="neon-button" onClick={onClick}>
      {label}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}