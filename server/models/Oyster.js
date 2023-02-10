import mongoose from "mongoose";

const oysterSchema = new mongoose.Schema(
    {
        name: String,
        location: String,
        size: String,
        description: String,
        price: String,
    }
);

const Oyster = mongoose.model("Oyster", oysterSchema);

export default Oyster;