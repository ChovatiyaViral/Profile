import React from 'react';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface ImageModalContextType {
  isOpen: boolean;
  imageSrc: string;
  alt: string;
  openModal: (src: string, alt: string) => void;
  closeModal: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export const useImageModal = () => {
  const context = useContext(ImageModalContext);
  if (!context) {
    throw new Error('useImageModal must be used within an ImageModalProvider');
  }
  return context;
};

interface ImageModalProviderProps {
  children: ReactNode;
}

export const ImageModalProvider = ({ children }: ImageModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [alt, setAlt] = useState('');

  const openModal = (src: string, alt: string) => {
    setImageSrc(src);
    setAlt(alt);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageSrc('');
    setAlt('');
  };

  return (
    <ImageModalContext.Provider value={{ isOpen, imageSrc, alt, openModal, closeModal }}>
      {children}
    </ImageModalContext.Provider>
  );
};

