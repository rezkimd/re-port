import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    headline: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    socials: {
    github: String,
    linkedin: String,
    twitter: String,
    },
    updatedAt: { type: Date, default: Date.now },
});
export const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);