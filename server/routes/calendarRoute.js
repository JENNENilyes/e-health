const router = require('express').Router();
const calenderController  = require('../controllers/calendarController');

router.post('/create-event', calenderController.createCalender);
router.get('/get-event',calenderController.readCalender);


module.exports = router;
