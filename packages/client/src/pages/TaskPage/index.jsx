import React from "react";
import TaskForm from "../../components/TaskForm";
import TasksList from "../../components/TaskList";

function TaskPage() {
  return (
    <>
      <TaskForm />
      <TasksList />
    </>
  );
}

export default TaskPage;
