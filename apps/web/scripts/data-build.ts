// Script ini dijalankan di komputer kamu/server build, BUKAN di browser.
import "dotenv/config"; // Pastikan install dotenv di apps/web jika belum
import fs from "fs";
import path from "path";
import { connectDB, Project } from "@re-port/db";

async function main() {
  console.log("🔄 Fetching data from MongoDB...");

  // 1. Konek ke DB
  await connectDB();

  // 2. Ambil data (Urutkan dari yang terbaru)
  const projects = await Project.find().sort({ createdAt: -1 }).lean();

  console.log(`✅ Found ${projects.length} projects.`);

  // 3. Tentukan lokasi simpan JSON (di dalam src agar bisa di-import)
  const outputPath = path.join(process.cwd(), "src", "data", "projects.json");
  const outputDir = path.dirname(outputPath);

  // Buat folder jika belum ada
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 4. Tulis file JSON
  fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
  console.log(`💾 Data saved to ${outputPath}`);

  process.exit(0);
}

main();