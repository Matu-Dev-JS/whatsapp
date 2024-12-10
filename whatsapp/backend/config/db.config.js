import mongoose from "mongoose";
import ENVIROMENT from "./enviroment.config.js";

mongoose.connect(ENVIROMENT.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.log(error)
})

export default mongoose