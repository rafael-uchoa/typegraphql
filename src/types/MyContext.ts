import { Request } from 'express';

export default interface MyContext {
  req: Request;
}
