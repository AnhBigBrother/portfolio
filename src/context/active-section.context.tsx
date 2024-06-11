'use client';
import React, { createContext, useContext, useState } from 'react';

type activeSectionType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  clickedSection: string | null;
  setClickedSection: React.Dispatch<React.SetStateAction<string | null>>;
};
export const ActiveSectionContext = createContext<activeSectionType | null>(null);

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
  return context;
};

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('Home');
  const [clickedSection, setClickedSection] = useState<string | null>(null);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        clickedSection,
        setClickedSection,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
