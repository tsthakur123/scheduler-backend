// src/interfaces/AuthRequest.ts
import { Request } from "express";

// Extend the Request interface to include the user property
export interface AuthRequest extends Request {
  user?: any;  // Customize 'any' with the actual type for 'user' if you know the structure
}
