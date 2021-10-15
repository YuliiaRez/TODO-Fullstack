import axios from "axios";

const axiosOptions = {
  baseURL: "http://127.0.0.1:5000/api",
};

const apiInstance = axios.create(axiosOptions);

// 'http://127.0.0.1:5000/api/tasks'
export const getTasks = () => apiInstance.get("/tasks");

//{data:tasks}

export const createTask = (task) => apiInstance.post("/tasks", task);

// 'http://127.0.0.1:5000/api/tasks/id'
export const deleteTask = (id) => apiInstance.delete(`/tasks/${id}`);
