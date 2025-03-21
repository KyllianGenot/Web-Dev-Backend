import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGODB_URL);

export default {
    port: process.env.PORT || 3000,
    mongoDbUrl: process.env.MONGODB_URL,
};