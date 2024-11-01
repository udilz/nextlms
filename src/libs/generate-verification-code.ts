import { customAlphabet } from "nanoid";

export function genereateVerificationCode() {
  const generateCode = customAlphabet("123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);
  return generateCode();
}
