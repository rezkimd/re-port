import React from "react";
import { DocumentsHubModal } from "./documents/DocumentsHubModal";

interface DynamicCvModalProps {
  onClose: () => void;
}

/**
 * DynamicCvModal - Documents Hub Modal
 * Delegates to the interactive 4-binder Documents Hub (CV, Presentation File, Design Chamber, Certification)
 */
export const DynamicCvModal: React.FC<DynamicCvModalProps> = ({ onClose }) => {
  return <DocumentsHubModal onClose={onClose} />;
};
