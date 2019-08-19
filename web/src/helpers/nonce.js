import crypto from "crypto"
export default (len) => crypto.randomBytes(len)