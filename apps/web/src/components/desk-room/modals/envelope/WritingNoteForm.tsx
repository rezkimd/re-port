import React, { useState, useRef } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { InteractiveFountainPen } from "./InteractiveFountainPen";

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface WritingNoteFormProps {
  onCancel: () => void;
  onSubmit: (data: FormData) => void;
}

export const WritingNoteForm: React.FC<WritingNoteFormProps> = ({ onCancel, onSubmit }) => {
  const paperRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    onSubmit(formData);
  };

  return (
    <div ref={paperRef} className="relative w-full max-w-[560px] bg-[#FEFDF8] rounded-xl shadow-2xl border-2 border-[#D8D1BD] flex flex-col select-text">
      {/* Vertical Memo ID on Left Margin */}
      <div
        className="absolute left-2.5 md:left-3.5 top-28 pointer-events-none select-none text-[9px] md:text-[10px] font-mono font-medium tracking-[0.25em] text-[#8C8267]/75 uppercase z-20"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        MEMO #2026-DM • REZKI DESK
      </div>

      {/* Top Navigation Row (Transparent, No Header Box or Border) */}
      <div className="bg-transparent px-6 md:px-8 pt-5 pb-2 flex items-center justify-start z-10">
        {/* Thin Cancel Button with Single Left Arrow */}
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#5C4B08] hover:text-[#241D00] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>return to desk</span>
        </button>
      </div>

      {/* Ruled Grid Paper Form Area */}
      <form onSubmit={handleSubmit} className="relative px-6 pb-6 md:px-8 md:pb-8 flex-1 flex flex-col justify-between">
        {/* Background notebook lines & red margin container with rounded bottom */}
        <div className="absolute inset-0 pointer-events-none rounded-b-[10px] overflow-hidden">
          {/* Vertical Red Margin Line */}
          <div className="absolute left-10 md:left-12 top-0 bottom-0 w-[1.5px] bg-[#E89E9B] opacity-60 pointer-events-none" />

          {/* 21 Subtle Horizontal Ruled Notebook Lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage: "linear-gradient(to bottom, transparent 31px, #7A9CA5 32px)",
              backgroundSize: "100% 32px",
            }}
          />
        </div>

        <div className="relative z-10 pl-6 md:pl-8 space-y-5">
          {/* Header Title */}
          <div className="border-b border-[#D8D1BD] pb-3 flex items-baseline justify-between">
            <h3 className="font-sans font-bold text-lg text-[#3A2F00] tracking-tight">
              Direct Message Inquiry
            </h3>
            {/* Vintage Rubber Stamp Tag */}
            <div className="rotate-[-4deg] border border-[#877B00] px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#877B00] bg-[#F2FEDC]/60 uppercase">
              ★ OFFICIAL NOTE
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Field 1: Name */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-[#5C4B08] uppercase tracking-wider mb-0.5">
                Your Name / Organization
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="write your name or company here..."
                className="w-full bg-transparent border-b border-[#B5BF9E] focus:border-[#006E5E] outline-none py-1 font-['Caveat',cursive] text-2xl font-medium text-[#241D00] placeholder:text-[#9B9277] placeholder:font-['Caveat',cursive] placeholder:text-xl focus:bg-[#F2FEDC]/30 transition-colors"
              />
            </div>

            {/* Field 2: Email */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-[#5C4B08] uppercase tracking-wider mb-0.5">
                Return Email Address
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@organization.com..."
                className="w-full bg-transparent border-b border-[#B5BF9E] focus:border-[#006E5E] outline-none py-1 font-['Caveat',cursive] text-2xl font-medium text-[#241D00] placeholder:text-[#9B9277] placeholder:font-['Caveat',cursive] placeholder:text-xl focus:bg-[#F2FEDC]/30 transition-colors"
              />
            </div>

            {/* Field 3: Subject / Topic - Text Input in Caveat Font */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-[#5C4B08] uppercase tracking-wider mb-0.5">
                Discussion Topic
              </label>
              <input
                required
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="write discussion topic / subject here..."
                className="w-full bg-transparent border-b border-[#B5BF9E] focus:border-[#006E5E] outline-none py-1 font-['Caveat',cursive] text-2xl font-medium text-[#241D00] placeholder:text-[#9B9277] placeholder:font-['Caveat',cursive] placeholder:text-xl focus:bg-[#F2FEDC]/30 transition-colors"
              />
            </div>

            {/* Field 4: Message Body in Caveat Font */}
            <div>
              <label className="block text-[11px] font-mono font-bold text-[#5C4B08] uppercase tracking-wider mb-0.5">
                Letter Contents
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Dear Rezki, I would like to discuss an opportunity regarding... Feel free to write anything here."
                className="w-full bg-transparent border border-dashed border-[#B5BF9E]/70 focus:border-[#006E5E] rounded-lg p-3 outline-none font-['Caveat',cursive] text-2xl font-medium text-[#241D00] leading-relaxed placeholder:text-[#9B9277] placeholder:font-['Caveat',cursive] placeholder:text-xl focus:bg-[#F2FEDC]/40 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Action Row inside Paper Canvas: Send Button */}
          <div className="pt-2 flex items-center justify-end border-t border-[#D8D1BD]">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#CBB800] text-[#241D00] font-sans font-bold text-sm hover:bg-[#F5EE99] transition-all border-2 border-[#3A2F00] shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>FOLD & SEND LETTER</span>
            </button>
          </div>
        </div>
      </form>

      {/* Interactive Fountain Pen with 2-second fading ink trail & paper nib boundary */}
      <InteractiveFountainPen paperRef={paperRef} />
    </div>
  );
};
