import { createHmac, randomInt } from "node:crypto";


export const generateOTP = () : string => {
    return randomInt(0, 1_000_000).toString().padStart(6,"0");
}

export const hashOTP = (otp: string) => {
   return createHmac('sha256', process.env.SECRET_KEY!).update(otp).digest("hex");
}