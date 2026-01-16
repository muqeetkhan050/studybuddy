import React from "react";
import LeftBar from "./Leftbar";

import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate();
    return(
        <div>
           
           <LeftBar />

        </div>
    )
}

export default Home;