import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation()
  const history = useNavigate()
  
  
  const sendProps = (path)=>{
    history(path)
    const online = searchParams.get('online')
    console.log(online)

}
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
          <button onClick={()=> sendProps("/onlineState")}>Go to State</button>
          <button onClick={goBack}>Go back</button>
          <button onClick={goForward}>Go forward</button>
        </div>
    </div>
  );
};

export default HomePage;
