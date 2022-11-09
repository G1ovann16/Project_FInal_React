import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {

  const history = useNavigate()

const navigate = ()=>{
  history("/")

}
  return (
    <div>
      <h1 style={{ color: "black" }}>error 404</h1>
      <button onClick={()=> navigate()}>Go to Home</button>
    </div>
  );
}
