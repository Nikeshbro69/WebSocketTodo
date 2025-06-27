import app from './src/app';
import {config} from 'dotenv';
import envConfig from './src/config/config';
import { connect } from 'http2';
import connectToDatabase from './src/config/db';
config();


function startServer() {
    connectToDatabase()
    const port = envConfig.port
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

startServer();