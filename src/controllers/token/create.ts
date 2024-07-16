import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export class GenerateToken {
  static async create(req: Request, res: Response) {

    const { expires, secret } = req.query

    try {
      const token = jwt.sign(req.body, String(secret) || process.env.JWT!, {
        expiresIn: expires ? String(expires) || '8h'
      })

      return res.status(201).json({
        token
      })
    } catch (error) {
      return res.status(400).json({
        error,
        message: "Error create token"
      })
    }
  }
}