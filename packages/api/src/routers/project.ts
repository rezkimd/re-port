import { z } from "zod";
import { publicProcedure, router } from "../index";
import { Project } from "@re-port/db";
import { TRPCError } from "@trpc/server";

// 1. Definisikan Schema Dasar Project
const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tech: z.string().min(1),
  repoLink: z.string().optional(),
  demoLink: z.string().optional(),
});

export const projectRouter = router({
  // -----------------------------------------------------------
  // 1. GET ALL (Ambil Semua Data)
  // -----------------------------------------------------------
  getAll: publicProcedure.query(async () => {
    return await Project.find().sort({ createdAt: -1 });
  }),

  // -----------------------------------------------------------
  // 2. GET BY TITLE (Cari Satu Project berdasarkan Title)
  // -----------------------------------------------------------
  getByTitle: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(async ({ input }) => {
      const project = await Project.findOne({ title: input.title });

      if (!project) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Project dengan judul "${input.title}" tidak ditemukan.`,
        });
      }

      return project;
    }),

  // -----------------------------------------------------------
  // 3. CREATE (Buat Project Baru)
  // -----------------------------------------------------------
  create: publicProcedure.input(projectSchema).mutation(async ({ input }) => {
    // Cek apakah judul sudah ada (opsional, untuk mencegah duplikat)
    const existing = await Project.findOne({ title: input.title });
    if (existing) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "Project dengan judul ini sudah ada.",
      });
    }

    return await Project.create(input);
  }),

  // -----------------------------------------------------------
  // 4. UPDATE (Update berdasarkan Title)
  // -----------------------------------------------------------
  update: publicProcedure
    .input(
      z.object({
        targetTitle: z.string(), // Judul LAMA (yang dicari di DB)
        data: projectSchema.partial(), // Data BARU (bisa ubah judul juga)
      })
    )
    .mutation(async ({ input }) => {
      // Cari berdasarkan targetTitle, update dengan data baru
      const updatedProject = await Project.findOneAndUpdate(
        { title: input.targetTitle }, // Filter
        input.data, // Data update
        { new: true } // Return data setelah diupdate
      );

      if (!updatedProject) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Gagal update. Project "${input.targetTitle}" tidak ditemukan.`,
        });
      }

      return updatedProject;
    }),

  // -----------------------------------------------------------
  // 5. DELETE (Hapus berdasarkan Title)
  // -----------------------------------------------------------
  delete: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input }) => {
      const deletedProject = await Project.findOneAndDelete({
        title: input.title,
      });

      if (!deletedProject) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Gagal hapus. Project "${input.title}" tidak ditemukan.`,
        });
      }

      return { success: true, message: `Project "${input.title}" berhasil dihapus.` };
    }),
});