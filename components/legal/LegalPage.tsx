"use client";

import React from "react";
import legalData from "@/data/legal.json";

type ContentBlock =
  | string
  | { type: "list"; items: string[] }
  | { type: "subheading"; value: string }
  | { type: "note"; value: string };

interface LegalSection {
  title?: string;
  content: ContentBlock[];
}

interface LegalPageData {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: LegalSection[];
}

interface LegalPageProps {
  id: keyof typeof legalData;
}

const renderTextWithLinks = (text: string) => {
  // Regex for emails and URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

  // Split by URLs first
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
        >
          {part}
        </a>
      );
    }

    // Then handle emails in the remaining text
    const subParts = part.split(emailRegex);
    return subParts.map((subPart, j) => {
      if (subPart.match(emailRegex)) {
        return (
          <a
            key={`${i}-${j}`}
            href={`mailto:${subPart}`}
            className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
          >
            {subPart}
          </a>
        );
      }
      return subPart;
    });
  });
};

export const LegalPage: React.FC<LegalPageProps> = ({ id }) => {
  const data = legalData[id] as LegalPageData;

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400">The legal page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-gray-400">
          {data.title}
        </h1>
        <p className="text-blue-400 font-medium mb-8">
          Last Updated: {data.lastUpdated}
        </p>
        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
          {renderTextWithLinks(data.introduction)}
        </p>
      </header>

      <div className="space-y-4">
        {data.sections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-colors"
          >
            {section.title && (
              <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                {section.title}
              </h2>
            )}
            <div className="space-y-4">
              {section.content.map((block, blockIndex) => {
                if (typeof block === "string") {
                  return (
                    <p key={blockIndex} className="text-gray-400 leading-relaxed">
                      {renderTextWithLinks(block)}
                    </p>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={blockIndex} className="space-y-3 pl-5 list-disc text-gray-400">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {renderTextWithLinks(item)}
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "subheading") {
                  return (
                    <h3
                      key={blockIndex}
                      className="text-lg font-semibold text-blue-400 mt-6 mb-2"
                    >
                      {block.value}
                    </h3>
                  );
                }

                if (block.type === "note") {
                  return (
                    <div
                      key={blockIndex}
                      className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-6 text-blue-200/80 italic font-medium"
                    >
                      {renderTextWithLinks(block.value)}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
