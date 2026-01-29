import React from "react";
import { Clock } from "lucide-react";
import TradingLandingPage from "./TradingLandingPage";
import "./Home.css"; // Import the CSS file

export default function Home() {
  return (
    <>
      <div className="landing-container">
        {/* Header */}
        <div className="header">
          <h1 className="main-title">
            🚀 Start Smart Trading With Proven Strategies
          </h1>

          <h2 className="subtitle">
            Learn how professional traders manage risk
            <br />
            entries & exits — step-by-step guidance.{" "}
          </h2>

          <button className="demo-button">Join Free Telegram Channel</button>
        </div>

      
      </div>
      <TradingLandingPage />
    </>
  );
}
