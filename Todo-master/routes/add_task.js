const express = require('express');
const router = express.Router();

const addTaskController = require('../controllers/add_task_controller');

router.use(express.urlencoded());

router.post('/',addTaskController.addTask);

module.exports = router;