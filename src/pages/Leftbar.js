import React from "react";

export default function LeftBar({ setActiveComponent }) {
  return (
    <div style={{ flex: 1, padding: "20px", borderRight: "1px solid #ddd" }}>
      
      <button onClick={() => setActiveComponent("streak")}>
        Streak
      </button>

      <br /><br />

      <button onClick={() => setActiveComponent("timer")}>
        Timer
      </button>

      <br /><br />

      <button onClick={() => setActiveComponent("notes")}>
        Notes
      </button>

    </div>
  );
}
