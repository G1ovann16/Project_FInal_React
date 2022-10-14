import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/forms/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "First 1",
    "aquí se ejecutará uan tarea",
    false,
    LEVELS.NORMAL
  );

  return (
    <div>
      <h1>Your Tasks:</h1>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
