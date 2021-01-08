const router = require ('express').Router()
const authController = require ('../controllers/authController')
 

router.post('/register', authController.register);
router.post('/login',authController.login);
router.post('./signup',authController.signup);

module.exports= router