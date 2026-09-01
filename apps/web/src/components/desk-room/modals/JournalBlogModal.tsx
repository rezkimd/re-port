import React from "react";
import { X } from "lucide-react";

interface JournalBlogModalProps {
  onClose: () => void;
}

export const JournalBlogModal: React.FC<JournalBlogModalProps> = ({ onClose }) => {
  return (
    <div className="relative w-full max-w-4xl rounded-2xl bg-white border-4 border-[#006E5E] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
      <div className="flex items-center justify-between px-6 py-4 bg-[#3A2F00] border-b-2 border-[#CBB800] text-white">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📖</span>
          <h2 className="font-sans font-bold text-lg text-[#CBB800]">DEVELOPER JOURNAL & ARCHITECTURE NOTES</h2>
        </div>
        <button onClick={onClose} className="p-1 rounded bg-[#CBB800] text-[#241D00] font-bold text-sm hover:bg-[#F5EE99]">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D5E8B3]">
        {/* Left Page */}
        <div className="space-y-4 pr-0 md:pr-4">
          <span className="text-xs font-mono font-bold text-[#006E5E] tracking-widest uppercase">Chapter 1</span>
          <h3 className="text-xl font-bold text-[#241D00]">ERP Odoo & PostgreSQL Architecture</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Membangun modularitas logika bisnis enterprise resource planning membutuhkan isolasi transaksi ketat
            antara schema database relasional dan reactive UI layer.
          </p>
          <div className="p-4 rounded-lg bg-[#F2FEDC] border border-[#B5BF9E] text-xs space-y-2 text-[#3A2F00]">
            <p className="font-bold">Key Engineering Takeaways:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Indexing komposit PostgreSQL pada foreign key relasi ribuan sales order.</li>
              <li>Asynchronous Redis worker pool untuk sinkronisasi inventori real-time.</li>
              <li>Atomic transaction isolation untuk validasi stok ganda.</li>
            </ul>
          </div>
        </div>

        {/* Right Page */}
        <div className="space-y-4 pt-6 md:pt-0 pl-0 md:pl-8">
          <span className="text-xs font-mono font-bold text-[#877B00] tracking-widest uppercase">Chapter 2</span>
          <h3 className="text-xl font-bold text-[#241D00]">Game-like Spatial UI Paradigm</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Portofolio konvensional yang hanya berisi list kartu statis sering kali cepat dilupakan. Mengubah ruang interaksi
            menjadi ruang kerja visual interaktif menciptakan *emotional anchor* kuat bagi para recruiter.
          </p>
          <div className="p-4 rounded-lg bg-[#F2FEDC] border border-[#B5BF9E] text-xs space-y-2 text-[#3A2F00]">
            <p className="font-bold">Teknologi yang Diimplementasikan:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Interactive SVG 1920x1080 responsif tanpa lag frame.</li>
              <li>Custom Typeface <code>Holistical</code> & token kontras tinggi.</li>
              <li>Zero runtime overhead, murni vector matematika browser.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
