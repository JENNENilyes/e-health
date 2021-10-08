const router = require('express').Router();
const EvenementController = require('../controllers/evenementController');
router.get('/', EvenementController.ReadEvenement);

router.post('/', EvenementController.createEvenement);



module.exports = router;
