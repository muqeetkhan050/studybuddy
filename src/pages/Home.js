

import React, { useState } from "react";
import LeftBar from "./Leftbar";
import Streak from "../components/Streak";
import Timer from "../components/Timer";
import Notes from "../components/Notes";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("streak");

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <LeftBar setActiveComponent={setActiveComponent} />

      <div style={{ flex: 1, padding: "20px", overflow: "hidden" }}>
        {activeComponent === "streak" && <Streak />}
        {activeComponent === "timer" && <Timer />}
        {activeComponent === "notes" && <Notes />}
      </div>
    </div>
  );
}