const jwt = require("jsonwebtoken");

const secret = "r4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E";
const payload = {
  tenant: "1a845694-2e9f-4619-aa42-6e5bc2394893"
};
const options = { expiresIn: process.argv[2] ? process.argv[2] : "18h" };

console.log(jwt.sign(payload, secret, options));
