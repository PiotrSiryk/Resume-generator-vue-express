import * as jwt from "jsonwebtoken";
import crypto from "crypto";

export function generateAccessToken(user: any) {
  if (process.env.JWT_ACCESS_SECRET) {
    return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "5m",
    });
  }
}

export function generateRefreshToken(user: any, jti: any) {
  if (process.env.JWT_REFRESH_SECRET) {
    return jwt.sign(
      {
        userId: user.id,
        jti,
      },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "8h",
      }
    );
  }
}

export function hashToken(token: string): string {
  return crypto.createHash("sha512").update(token).digest("hex");
}
