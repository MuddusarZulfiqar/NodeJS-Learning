const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 5;
const start = Date.now();
const MAX_CALLS = 6;
console.log("Starting the process");

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, key) => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log(`1: ${Date.now() - start}`);
