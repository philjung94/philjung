import crypto from "crypto"
const hash = crypto.createHash("sha256")

export default function(input) {
  hash.update(String(input))
  return hash.digest("hex")
}