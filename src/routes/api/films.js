import { Router } from 'express'
import controller from '../../controllers/film.js'

const router = Router()
const { All,Get,Post,Put,Delete} = controller

router.get("/",All)
router.get("/:id",Get)
router.post("/",Post)
router.put("/:id",Put)
router.delete("/:id",Delete)

export default router
