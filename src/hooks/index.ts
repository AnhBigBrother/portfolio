import { useActiveSectionContext } from '@/context/active-section.context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useSectionInView = (sectionName: string, threshold = 0.8) => {
  const { setActiveSection, clickedSection, setClickedSection } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView && (clickedSection === null || clickedSection === sectionName)) {
      setActiveSection(sectionName);
      setClickedSection(null);
    }
  }, [inView]);

  return ref;
};
