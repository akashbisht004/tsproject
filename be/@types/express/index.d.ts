import type { IUser } from "../../src/utils"
import * as express from 'express'

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
