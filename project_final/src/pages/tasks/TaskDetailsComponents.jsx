import React from "react";
import { useParams } from "react-router-dom";

const TaskDetailsComponents = ({ task }) => {
  const { id, name } = useParams();
  return (
    <div>
      <h1>TaskDetailsComponents - {id}</h1>
      <h2>{name}</h2>
      <h3>{task.description}</h3>
    </div>
  );
};

export default TaskDetailsComponents;
