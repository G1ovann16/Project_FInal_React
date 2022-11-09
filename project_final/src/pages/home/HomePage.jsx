import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation()
const history = useNavigate()

  const navigate = ()=>{
    history("/profile")
  
  }
  const goBack = ()=>{
    history(-1)
  
  }
  const goForward = ()=>{
    history(+1)
  
  }
  return (
    <div>
      <h1 style={{color: 'black'}}>Dashboard</h1>
      <div>
          <button onClick={()=> navigate()}>Go to Profile</button>
          <button onClick={goBack}>Go back</button>
          <button onClick={goForward}>Go forward</button>
        </div>
    </div>
  );
};

export default HomePage;
