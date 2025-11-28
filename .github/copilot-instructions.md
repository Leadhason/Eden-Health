# Eden Health - Copilot Instructions

This is a React + TypeScript landing page for a healthy hair salon built with Vite and styled with Tailwind CSS.

## Architecture Overview

- **Single-page application** with all sections in `App.tsx` as a vertical layout
- **Component-driven structure** in `/components/` - each section is a standalone component
- **Custom design system** using Tailwind with extended theme colors (cream, terra, charcoal)
- **Typography hierarchy**: Playfair Display (serif) for headings, Lato (sans) for body text

## Key Files

- `App.tsx` - Main layout component importing all sections in order
- `components/` - Modular UI components for each page section
- `types.ts` - Shared TypeScript interfaces (Service, TeamMember, Testimonial, etc.)
- `index.html` - Contains Tailwind config with custom theme extensions

## Development Patterns

### Component Structure
All components follow this pattern:
```tsx
// Standard imports
import React from 'react';
import Button from './Button'; // Local components

// TypeScript interface for props
interface ComponentProps {
  variant?: string;
  children?: React.ReactNode;
}

// Functional component with explicit typing
const Component: React.FC<ComponentProps> = ({ variant = 'primary' }) => {
  return (
    <section className="relative py-20"> {/* Consistent section padding */}
      <div className="container mx-auto px-6"> {/* Standard container */}
        {/* Content */}
      </div>
    </section>
  );
};
```

### Styling Conventions
- **Color palette**: cream (background), charcoal (text), terra (accent), brown (secondary)
- **Typography**: Use `font-serif` for headings, `font-sans` for body text
- **Spacing**: Standard section padding is `py-20`, container uses `mx-auto px-6`
- **Responsive**: Mobile-first approach with `md:` and `lg:` breakpoints

### Reusable Components
- **Button**: Three variants (primary, outline, dark) with optional arrow icon
- **SectionHeading**: Standardized subtitle/title pattern with optional centering and light theme

## Environment Setup

```bash
npm install          # Install dependencies
npm run dev         # Start development server (port 3000)
npm run build       # Build for production
```

### Environment Variables
- `GEMINI_API_KEY` in `.env.local` (exposed as `process.env.GEMINI_API_KEY` via Vite config)

## Adding New Sections

1. Create component in `/components/NewSection.tsx`
2. Add to import list in `App.tsx`
3. Insert in the vertical layout order
4. Use `SectionHeading` for consistency
5. Follow the container/padding patterns

## Image Handling
Currently using placeholder images from Picsum. Replace with actual assets maintaining the responsive image patterns seen in `Hero.tsx`.