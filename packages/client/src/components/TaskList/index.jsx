import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";

function TasksList(props) {
  const { tasks, isFetching, error, getTasks, deleteTask } = props;

  useEffect(() => {
    getTasks();
  }, []);

  const mapTask = ({ id, toDoTask }) => {
    const deleteHandler = () => {
      deleteTask(id);
    };

    return (
      <li key={id}>
        toDoTask: {toDoTask}
        <button onClick={deleteHandler}>Delete</button>
      </li>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul>{tasks.map(mapTask)}</ul>
    </>
  );
}

const mapStateToProps = (state) => state.task;

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(actionCreators.getTasksAction()),
  deleteTask: (id) => dispatch(actionCreators.deleteTaskAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
