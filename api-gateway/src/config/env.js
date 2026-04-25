import dotenv from "dotenv";
import path from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), ".env")
})

const ENV = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
    ORCHESTRATOR_URL: process.env.ORCHESTRATOR_URL
}

export default ENV;