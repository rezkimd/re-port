import React from "react";
import { EnvelopeModal } from "./envelope/EnvelopeModal";

interface ContactFormModalProps {
  onClose: () => void;
}

/**
 * ContactFormModal - Direct Message Envelope Flow
 * Delegates to the interactive vintage envelope modal with origami tri-fold animations.
 */
export const ContactFormModal: React.FC<ContactFormModalProps> = ({ onClose }) => {
  return <EnvelopeModal onClose={onClose} />;
};
