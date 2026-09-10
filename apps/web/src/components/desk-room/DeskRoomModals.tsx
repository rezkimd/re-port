import React from "react";
import { RezkiOSModal } from "./modals/RezkiOSModal";
import { ContactFormModal } from "./modals/ContactFormModal";
import { JournalBlogModal } from "./modals/JournalBlogModal";
import { DynamicCvModal } from "./modals/DynamicCvModal";

interface DeskRoomModalsProps {
  activeModal: "apps" | "contact" | "journal" | "cv" | null;
  onClose: () => void;
}

export const DeskRoomModals: React.FC<DeskRoomModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  // Scene 05-01 Documents Hub takes full-screen scene environment (Room Wall & Wooden Desk)
  if (activeModal === "cv") {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
        <DynamicCvModal onClose={onClose} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241D00]/80 backdrop-blur-md animate-in fade-in duration-200">
      {activeModal === "apps" && <RezkiOSModal onClose={onClose} />}
      {activeModal === "contact" && <ContactFormModal onClose={onClose} />}
      {activeModal === "journal" && <JournalBlogModal onClose={onClose} />}
    </div>
  );
};
