import { Router } from 'express'
import controller,{ validationRegister } from '../../controllers/user.js'

const router = Router()
const { Register, Login } = controller

router.post("/register",validationRegister,Register)
router.post("/login",Login)
export default router
