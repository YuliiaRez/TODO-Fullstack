const { Router } = require("express");
const { taskController } = require("../controllers");
const { paginate, validate } = require("../middleware");

const taskRouter = Router();

taskRouter
  .route("/")
  .get(paginate.paginateTasks, taskController.getTasks)
  .post(validate.validateNewTask, taskController.createTask);

taskRouter
  .route("/:taskId")
  .get(taskController.getTaskById)
  .put(
    validate.validateNewTask,
    taskController.updateOrCreateTask,
    taskController.createTask
  )
  .delete(taskController.deleteTask);

taskRouter.get("/:taskId/tasks", taskController.getTaskTasks);

module.exports = taskRouter;
