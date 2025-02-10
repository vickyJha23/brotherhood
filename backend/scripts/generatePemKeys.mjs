import { generateKey, generateKeyPairSync } from "crypto";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

function generatePemKey () {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: "spki",
            format: "pem",
        },
        privateKeyEncoding:{
             type: "pkcs8",
             format: "pem",
        }
    })
    fs.writeFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "../certs/privateKey.pem"), privateKey);
    fs.writeFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "../certs/publicKey.pem"), publicKey);
}

generatePemKey();