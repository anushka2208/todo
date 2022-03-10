const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.use(express.urlencoded());



router.get('/',homeController.home);

router.use('/add-task',require('./add_task'));

router.use('/delete-task',require('./delete_task'));

// router.post('/add-task',homeController.addTask);

// router.post('/delete-task',homeController.deleteTask);



module.exports = router;