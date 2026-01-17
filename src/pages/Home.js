import React, { useState } from "react";
import LeftBar from "./Leftbar";
import Streak from "../components/Streak";
import Timer from "../components/Timer";
import Notes from "../components/Notes";


export default function Home() {
  const [activeComponent, setActiveComponent] = useState("streak");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      

      <LeftBar setActiveComponent={setActiveComponent} />

      <div style={{ flex: 4, padding: "20px" }}>
        {activeComponent === "streak" && <Streak />}
        {activeComponent === "timer" && <Timer />}
        {activeComponent === "notes" && <Notes />}
      </div>

    </div>
  );
}
