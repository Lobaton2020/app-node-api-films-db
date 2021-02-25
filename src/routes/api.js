import { Router } from 'express'
import routesFilm from './api/films.js'
import routesUser from './api/users.js'
import { checkToken } from './middlewares.js'
const router = Router()

router.use("/films",checkToken, routesFilm)
router.use("/users", routesUser)

export default router
