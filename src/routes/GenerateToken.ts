import { Router } from 'express'

import { GenerateToken } from '../controllers/token/create'

const router = Router()

router.post("/create", GenerateToken.create)

export default router