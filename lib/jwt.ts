import jwt from "jsonwebtoken";
import { TwitchAccesstokenResponse } from "./types";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET must be populated at build time!");
}

export const COOKIE_NAME = "ort-token";

export function createJWT(payload: TwitchAccesstokenResponse) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: payload.expires_in,
  });
}

export function validateJWT(token: string): TwitchAccesstokenResponse {
  return jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as TwitchAccesstokenResponse;
}
