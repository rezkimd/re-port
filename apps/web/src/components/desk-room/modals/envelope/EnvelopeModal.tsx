import React, { useState, useEffect } from "react";
import { WritingNoteForm, type FormData } from "./WritingNoteForm";
import { OpenDeskEnvelope } from "./OpenDeskEnvelope";
import { OrigamiFoldAnimation } from "./OrigamiFoldAnimation";
import { SealedConfirmationCard } from "./SealedConfirmationCard";

interface EnvelopeModalProps {
  onClose: () => void;
}

type EnvelopeStep = "writing" | "folding" | "confirmed";

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<EnvelopeStep>("writing");
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleFormSubmit = (data: FormData) => {
    setSubmittedData(data);
    setStep("folding");
  };

  const handleFoldingComplete = () => {
    setStep("confirmed");
  };


  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center p-2 md:p-4">
      {/* Active Step Content */}
      {step === "writing" && (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Split Screen LEFT: Note Paper Form */}
          <WritingNoteForm onCancel={onClose} onSubmit={handleFormSubmit} />

          {/* Split Screen RIGHT: Open Desk Envelope */}
          <div className="hidden lg:flex">
            <OpenDeskEnvelope />
          </div>
        </div>
      )}

      {step === "folding" && (
        <div className="w-full flex items-center justify-center">
          <OrigamiFoldAnimation
            formData={submittedData}
            onAnimationComplete={handleFoldingComplete}
          />
        </div>
      )}

      {step === "confirmed" && (
        <div className="w-full flex items-center justify-center">
          <SealedConfirmationCard
            formData={submittedData}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  );
};
