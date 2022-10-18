import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/forms/task";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "First 1",
    "aquí se ejecutará una tarea",
    false,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "First 2",
    "aquí se ejecutará una tarea Urgente",
    true,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "First 3",
    "aquí se ejecutará una tarea bloaquead",
    false,
    LEVELS.BLOCKING
  );

  const [tasks, setTask] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    return () => {
      console.log(`unmount ${tasks}`);
    };
  }, [tasks]);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header p-3">
          <h5>Your Tasks:</h5>
        </div>
        <div
          className="card-body"
          style={{ position: "relative", height: "400px", color: "black" }}
          data-mdb-perfect-scrollbar="true"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                return <TaskComponent key={index} task={task}></TaskComponent>;
              })}
            </tbody>
          </table>
        </div>
        <TaskForm></TaskForm>
      </div>
    </div>
  );
};

export default TaskListComponent;
