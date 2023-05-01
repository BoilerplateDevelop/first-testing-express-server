import { Send } from "express";
import { StatusCodes } from "http-status-codes";

export interface ResponseType<T> {
  statusCode: StatusCodes;
  errorCode?: string;
  data: T;
  message?: string;
}
