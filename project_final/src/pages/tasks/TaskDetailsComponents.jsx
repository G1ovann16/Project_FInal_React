import React from 'react'
import {useParams} from "react-router-dom";

const TaskDetailsComponents = () => {

    const {id} = useParams()
  return (
    <div>TaskDetailsComponents - {id}</div>
  )
}

export default TaskDetailsComponents