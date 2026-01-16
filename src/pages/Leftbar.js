import React from 'react';
import Streak from '../components/Streak';
import Timer from '../components/Timer';
import Notes from '../components/Notes';
export default function LeftBar() {
  return (
    <div >  
        <Streak />      
        <Timer />   
        <Notes />
     
    </div>
  );
}

