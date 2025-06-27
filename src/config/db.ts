import mongoose from 'mongoose';

import envConfig from './config';


const connectToDatabase = async()=>{
    try {
        mongoose.connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });
        await mongoose.connect(envConfig.mongoUri as string)
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process if connection fails
        
    }
}
export default connectToDatabase;