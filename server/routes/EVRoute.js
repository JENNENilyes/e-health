const router = require('express').Router();
const EVController = require('../controllers/EVController');


router.get('/event', EVController.readRecomUserEvent);
router.post('/eventM', EVController.createEventManuelement);
router.post('/', EVController.createRecomUser);
router.delete('/:user', EVController.deleteEV);



module.exports = router;
