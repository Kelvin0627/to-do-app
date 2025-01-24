const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

async function connectMongo() {
    await mongoose
        .connect(process.env.MONGO_DB_URI)
        .then(() =>
            console.log(
                "Pinged your deployment. You successfully connected to MongoDB!"
            )
        )
        .catch((error) => handleError(error));
}

module.exports = { connectMongo };
