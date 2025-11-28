import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, center = false, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`text-sm tracking-widest uppercase mb-3 block ${light ? 'text-gray-300' : 'text-terra'}`}>
          • {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;