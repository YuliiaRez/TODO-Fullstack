import ACTION_TYPES from "./actionTypes";

export const getTasksAction = () => ({
  type: ACTION_TYPES.GET_TASKS_ACTION,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = (tasks) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks: tasks,
});

export const getTasksError = (e) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error: e,
});
// Create:
export const createTaskAction = (task) => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  task: task,
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = (task) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  task: task,
});

export const createTaskError = (e) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error: e,
});
//Delete:
export const deleteTaskAction = (id) => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  id: id,
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = (id) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  id,
});

export const deleteTaskError = (e) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error: e,
});
