import mongoose from "mongoose";

export const connectDB = async () => {

    const mongoUser = process.env.MONGO_USER
    const mongoPassword = process.env.MONGO_PASSWORD
    const database = process.env.MONGO_DB

    try {
        const connection = await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@samdev.envslru.mongodb.net/${database}?retryWrites=true&w=majority&appName=samdev`)
        if(!connection) {
            console.log('error de conexión')
        }
        console.log('conectado a mongo')
    } catch (error) {
        console.log(error)
    }
}
