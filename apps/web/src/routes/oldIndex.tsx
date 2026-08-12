import type { Route } from "./+types/_index";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  Cpu 
} from "lucide-react";
import { Link } from "react-router";

// UI Components
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Pastikan sudah diinstall
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Metadata
export function meta({}:Route.MetaArgs) {
  return [
    { title: "Portfolio | Re-Port" },
    { name: "description", content: "My Professional Portfolio" },
  ];
}

export default function Home() {
  // Data Dummy untuk Proyek (Nanti bisa kita ganti dengan data real)
  const projects = [
    {
      title: "Simple-O-Web",
      desc: "Sistem penilaian esai otomatis berbasis web.",
      tech: "React, Express, AI",
    },
    {
      title: "Facial Detection System",
      desc: "Integrasi Google Forms & Sheets untuk absensi RS.",
      tech: "Python, Firebase, Google API",
    },
    {
      title: "AI Model Quantization",
      desc: "Eksperimen menjalankan LLM lokal dengan VRAM terbatas.",
      tech: "Ollama, Python, GGUF",
    },
    {
      title: "Golang Cloud Tooling",
      desc: "CLI tools untuk manajemen cloud native.",
      tech: "Go, Cobra, Docker",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center gap-6">
        <div className="p-3 bg-muted rounded-full">
          <Terminal className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm a <span className="text-primary">Software Engineer</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Mahasiswa tingkat akhir Universitas Indonesia. Fokus pada DevOps, 
          Cloud Native, dan Artificial Intelligence.
        </p>
        <div className="flex gap-4 mt-4">
          <Button size="lg" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">View Work</a>
          </Button>
        </div>
      </section>

      {/* 2. ABOUT / SKILLS SECTION */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" /> Frontend & Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                React.js, Tailwind CSS, Express.js, Go (Golang), dan arsitektur Monorepo.
              </CardContent>
            </Card>
            
            {/* Skill Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5" /> DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                Containerization (Docker), CI/CD (Vercel), dan Cloud Infrastructure.
              </CardContent>
            </Card>

            {/* Skill Card 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5" /> AI & Local LLM
                </CardTitle>
              </CardHeader>
              <CardContent>
                Ollama, Model Quantization, dan integrasi AI ke aplikasi Web.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS CAROUSEL SECTION */}
      <section id="projects" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12">
          Beberapa pekerjaan terbaru yang sedang saya kembangkan.
        </p>
        
        <div className="flex justify-center">
          <Carousel className="w-full max-w-xs md:max-w-4xl">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between hover:border-primary transition-colors">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.tech}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{project.desc}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="secondary" className="w-full">Detail</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="container mx-auto px-4 py-24 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Tertarik berkolaborasi atau ingin berdiskusi tentang AI dan DevOps?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="nama@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Diskusi Project..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tulis pesanmu disini..." />
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <Button type="submit">Kirim Pesan</Button>
          </CardFooter>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>&copy; {new Date().getFullYear()} Re-Port. Built with Better-T-Stack.</p>
      </footer>
    </div>
  );
}