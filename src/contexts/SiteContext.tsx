import React, { createContext, useContext, useState, useEffect } from 'react';

interface HeroContent {
  title: string;
  description: string;
  backgroundImage: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
}

interface SiteContextType {
  heroContent: HeroContent;
  sections: Section[];
  updateHeroContent: (content: HeroContent) => void;
  updateSection: (section: Section) => void;
  addSection: (section: Omit<Section, 'id'>) => void;
  removeSection: (id: string) => void;
}

const defaultHeroContent: HeroContent = {
  title: 'ФК ГУДАУТА',
  description: 'Футбольный клуб с богатой историей и традициями, стремящийся к новым победам и достижениям',
  backgroundImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroContent, setHeroContent] = useState<HeroContent>(() => {
    const saved = localStorage.getItem('heroContent');
    return saved ? JSON.parse(saved) : defaultHeroContent;
  });

  const [sections, setSections] = useState<Section[]>(() => {
    const saved = localStorage.getItem('sections');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('heroContent', JSON.stringify(heroContent));
  }, [heroContent]);

  useEffect(() => {
    localStorage.setItem('sections', JSON.stringify(sections));
  }, [sections]);

  const updateHeroContent = (content: HeroContent) => {
    setHeroContent(content);
  };

  const updateSection = (updatedSection: Section) => {
    setSections(sections.map(section => 
      section.id === updatedSection.id ? updatedSection : section
    ));
  };

  const addSection = (newSection: Omit<Section, 'id'>) => {
    const section = {
      ...newSection,
      id: Date.now().toString()
    };
    setSections([...sections, section]);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
  };

  return (
    <SiteContext.Provider value={{
      heroContent,
      sections,
      updateHeroContent,
      updateSection,
      addSection,
      removeSection
    }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}; 