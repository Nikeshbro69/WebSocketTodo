import { config } from "dotenv";

config();

const envConfig ={
    port : process.env.port || 3000,
    mongoUri : process.env.MONGO_URI
}

export default envConfig;