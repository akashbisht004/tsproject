import { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * A type-safe Express handler with typed req.body.
 */
export type TypedRequestHandler<B = any> = (
  req: Request<{}, any, B>,
  res: Response,
  next: NextFunction
) => any;
