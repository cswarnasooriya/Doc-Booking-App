import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },

    role: {
        type: String,
        enum: ["patient", "doctor", "admin"],
        required: true,
    },

    doctor: {
        specialization: String,
        experience: Number,
        status: {
            type: String,
            enum: ["pending", "active", "suspended"],
            default: "pending",
        },
    },

}, { timestamps: true });

export default mongoose.model("User", userSchema);
