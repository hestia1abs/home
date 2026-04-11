'use client';

import { useEffect, useMemo, useState } from 'react';

export interface LegalTocSection {
  id: string;
  title: string;
  number: string;
}

interface LegalTocProps {
  sections: LegalTocSection[];
}

export function LegalToc({ sections }: LegalTocProps) {
  const firstSection = useMemo(() => sections[0]?.id ?? '', [sections]);
  const [activeSection, setActiveSection] = useState(firstSection);

  useEffect(() => {
    setActiveSection(firstSection);
  }, [firstSection]);

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-10% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <div className="mb-8 border border-white/10 bg-white/3 p-4 lg:hidden">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
          Contents
        </p>
        <nav className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`border px-3 py-3 text-xs uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? 'border-sky-400/40 bg-sky-400/10 text-sky-300'
                    : 'border-white/10 text-white/60 hover:border-white/25 hover:text-white'
                }`}
              >
                <span className="mr-2 text-white/35">{section.number}</span>
                {section.title}
              </a>
            );
          })}
        </nav>
      </div>

      <aside className="sticky top-24 hidden h-fit lg:block">
        <nav className="space-y-1 border border-white/10 bg-white/2 p-4">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
            Contents
          </p>
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block border-l-2 px-3 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? 'border-sky-400 text-sky-300'
                    : 'border-transparent text-white/45 hover:text-white/80'
                }`}
              >
                <span className="mr-2 text-white/30">{section.number}</span>
                {section.title}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
