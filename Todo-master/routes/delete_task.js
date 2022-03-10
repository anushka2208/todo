const express = require('express');
const router = express.Router();

const deleteTaskController = require('../controllers/delete_task_controller');

router.use(express.urlencoded());

router.post('/',deleteTaskController.deleteTask);

module.exports = router;