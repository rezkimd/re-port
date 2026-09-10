export interface AppItem {
  id: string;
  title: string;
  icon: string;
  category: string;
  tag: string;
  tagColor: string;
  stack: string[];
  shortDesc: string;
  problem: string;
  solution: string;
  metrics: Array<{ label: string; value: string }>;
  architecture: Array<{ step: string; desc: string }>;
  demoUrl?: string;
  repoUrl: string;
}

export type ServerState = "idle" | "starting" | "ready";
