import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({user}) => {
  const history = useNavigate()
  
  const navigate = ()=>{
    history("/taskList")
  
  }
  const goBack = ()=>{
    history(-1)
  
  }
  return (
    <div>
      <h1>
        ProfilePage
        </h1>
        <button onClick={()=> navigate()}>Your Tasks</button> 
        <button onClick={goBack}>Go back</button> 
      </div>
  )
}

export default ProfilePage