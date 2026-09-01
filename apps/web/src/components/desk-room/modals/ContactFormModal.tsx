import React, { useState } from "react";
import { X, Send } from "lucide-react";

interface ContactFormModalProps {
  onClose: () => void;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({ onClose }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <div className="relative w-full max-w-xl rounded-2xl bg-white border-4 border-[#006E5E] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
      <div className="flex items-center justify-between px-6 py-4 bg-[#006E5E] text-white">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✉️</span>
          <h2 className="font-sans font-bold text-lg tracking-wide">DIRECT MESSAGE // INQUIRY</h2>
        </div>
        <button onClick={onClose} className="p-1 rounded hover:bg-white/20 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 md:p-8">
        {contactSubmitted ? (
          <div className="text-center py-10 space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#F2FEDC] text-[#006E5E] flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h3 className="font-bold text-xl text-[#241D00]">Pesan Berhasil Terkirim!</h3>
            <p className="text-sm text-gray-600">Terima kasih atas pesan Anda. Saya akan membalas ke email Anda segera.</p>
            <button
              onClick={() => { setContactSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2 rounded-lg bg-[#CBB800] font-bold text-[#241D00]"
            >
              Tutup
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setContactSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-bold text-[#3A2F00] uppercase mb-1">Your Full Name / Company</label>
              <input
                required
                type="text"
                placeholder="e.g. John Doe / Tech Recruiter"
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2FEDC] border-2 border-[#B5BF9E] text-sm text-[#241D00] focus:outline-none focus:border-[#006E5E]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#3A2F00] uppercase mb-1">Your Email Address</label>
              <input
                required
                type="email"
                placeholder="recruiter@company.com"
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2FEDC] border-2 border-[#B5BF9E] text-sm text-[#241D00] focus:outline-none focus:border-[#006E5E]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#3A2F00] uppercase mb-1">Project Purpose / Topic</label>
              <select className="w-full px-4 py-2.5 rounded-lg bg-[#F2FEDC] border-2 border-[#B5BF9E] text-sm text-[#241D00] focus:outline-none focus:border-[#006E5E]">
                <option>Full-time Developer Hiring</option>
                <option>Freelance ERP / Odoo Consultation</option>
                <option>Web & Microservice Architecture</option>
                <option>Other Collaborations</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#3A2F00] uppercase mb-1">Detailed Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your goals, stack preferences, or project timeline..."
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2FEDC] border-2 border-[#B5BF9E] text-sm text-[#241D00] focus:outline-none focus:border-[#006E5E]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#CBB800] text-[#241D00] font-sans font-bold text-base hover:bg-[#F5EE99] transition-colors border-2 border-[#3A2F00] shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> SEND DIRECT MESSAGE
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
