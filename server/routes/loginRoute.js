const router = require('express').Router();
const clientController = require('../controllers/loginController');
const jwt = require('../middleware/jwt');
const admin = require('../middleware/jwt');

//router.get('/' , clientController.readClient);
router.get('/',clientController.readClient);
router.get("/userLog/:id", clientController.userInfo);

router.post('/', clientController.createClient);
router.post('/signup', clientController.RegisterClient);

router.post('/login', clientController.loginClient);
router.get("/logout", clientController.logout);

router.put('/user/avatar', clientController.updateAvatar);
router.put('/user/test', clientController.updateType);



module.exports = router;


/*const router = require('express').Router();
const LoginController = require('../controllers/loginController');

router.post('/signup',LoginController.signUp);
router.post("/login",LoginController.login);
router.get("/signup",LoginController.readClient);


module.exports = router;*/
