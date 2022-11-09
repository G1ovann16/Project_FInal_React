import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  const newTask = new Task(
    nameRef.current.value,
    descriptionRef.current.value,
    false,
    levelRef.current.value
  );
  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "name too short")
      .max(15, "name too long")
      .required("name is required"),
    description: Yup.string().required("description is required"),
    levels: Yup.string().oneOf([Yup.ref("LEVELS")]),
  });
  const normalStyle = {
    color: "blue",
    fontWeight: "bold",
  };
  const urgentStyle = {
    color: "tomato",
    fontWeight: "bold",
  };
  const blockingStyle = {
    color: "yellow",
    fontWeight: "bold",
  };
  return (
    <div>
      <Formik
        initialValues={newTask}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          add(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" name="name" placeholder="Your name" />
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div"></ErrorMessage>
            )}
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              type="text"
              name="description"
              placeholder="Your description"
            />
            {errors.description && touched.description && (
              <ErrorMessage
                description="description"
                component="div"
              ></ErrorMessage>
            )}
            <Field type="levels" name="levels" placeholder="levels" />
            <Field as="select" name="level">
              <option style={normalStyle} value={`${LEVELS.NORMAL}`}>
                NORMAL
              </option>
              <option style={blockingStyle} value={`${LEVELS.BLOCKING}`}>
                BLOCKING
              </option>
              <option style={urgentStyle} value={`${LEVELS.URGENT}`}>
                URGENT
              </option>
            </Field>
            <button type="submit">Add Task</button>
            {isSubmitting ? <p>Adding your task ...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};
export default TaskForm;
