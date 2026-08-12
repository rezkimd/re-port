import { z } from "zod";
import { publicProcedure, router } from "../index";
import { Profile } from "@re-port/db";

const profileInput = z.object({
  fullName: z.string(),
  headline: z.string(),
  bio: z.string(),
  email: z.string().email(),
  socials: z.object({
    github: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
  }).optional(),
});

export const profileRouter = router({
  // 1. GET (Ambil profil pertama yang ditemukan)
  get: publicProcedure.query(async () => {
    const profile = await Profile.findOne();
    return profile;
  }),

  // 2. CREATE / UPDATE (Upsert: Kalau belum ada buat baru, kalau ada update)
  save: publicProcedure.input(profileInput).mutation(async ({ input }) => {
    // Cek apakah sudah ada profile
    const existing = await Profile.findOne();
    
    if (existing) {
      // Update
      return await Profile.findByIdAndUpdate(existing._id, input, { new: true });
    } else {
      // Create baru
      return await Profile.create(input);
    }
  }),
});