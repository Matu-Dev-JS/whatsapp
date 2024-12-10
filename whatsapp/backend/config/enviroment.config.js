import dotenv from "dotenv";

dotenv.config();

const ENVIROMENT = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGO_URI,
    SECRET_KEY: process.env.SECRET_KEY
}

export default ENVIROMENT