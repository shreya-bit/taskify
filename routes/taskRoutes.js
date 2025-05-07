const express = require("express");
const router = express.Router();

const {
  createTask,
  updateTask,
  getTasks,
  deleteTask,
} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/", getTasks);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
