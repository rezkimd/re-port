import "dotenv/config"; // 1. Load Environment Variables paling atas
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "@re-port/api/context";
import { appRouter } from "@re-port/api/routers/index";
import { connectDB } from "@re-port/db"; // 2. Import fungsi koneksi DB
import cors from "cors";
import express from "express";

const app = express();

// 3. Konfigurasi CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // Izinkan semua origin saat dev
    methods: ["GET", "POST", "OPTIONS"],
  })
);

// 4. Endpoint tRPC
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use(express.json());

// 5. Root Endpoint (Health Check sederhana)
app.get("/", (_req, res) => {
  res.status(200).send("Server is running correctly");
});

const port = process.env.PORT || 3000;

// 6. Fungsi Start Server
const startServer = async () => {
  try {
    // Hubungkan Database dulu
    await connectDB();
    
    // Baru nyalakan server
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
      console.log(`🔗 tRPC endpoint: http://localhost:${port}/trpc`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();