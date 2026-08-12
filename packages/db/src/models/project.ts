import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: { type: String, required: true },
    repoLink: { type: String, required: true },
    demoLink: { type: String, required: true },
});
export const Project = mongoose.models.Porto || mongoose.model("Project", projectSchema);