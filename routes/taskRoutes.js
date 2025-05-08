const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createTask,
  updateTask,
  getTasks,
  deleteTask,
} = require("../controllers/taskController");

router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.delete("/:id", protect, deleteTask);
router.put("/:id", protect, updateTask);

module.exports = router;
