import React from "react";
import "../task.css";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { createTaskAction } from "../../actions";

function TaskForm(props) {
  const { createTask } = props;

  const initialTaskValues = {
    toDoTask: "",
  };
  const submitHandler = (values, formikBag) => {
    createTask(values);
    formikBag.resetForm();
  };

  return (
    <div className="task">
      <Formik initialValues={initialTaskValues} onSubmit={submitHandler}>
        {(formikProps) => {
          return (
            <Form>
              <Field name="toDoTask" />
              <br />
              <button type="submit">Add</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => {
    dispatch(createTaskAction(task));
  },
});

export default connect(null, mapDispatchToProps)(TaskForm);
