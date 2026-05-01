# Portfolio Website Specification

## Project Overview
- **Project Name**: Shanmukha Varma Penmetsa Portfolio
- **Type**: Single-page React portfolio website
- **Core Functionality**: Personal portfolio showcasing AI-first developer skills, projects, and contact information
- **Target Users**: Recruiters, potential clients, fellow developers

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo and theme toggle
- **Sections**: Hero, About, Skills, Projects, Resume, Contact, Footer
- **Responsive Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette (Dark Mode - Primary)
- Background Primary: `#0a0a0f` (deep dark)
- Background Secondary: `#12121a` (card backgrounds)
- Background Tertiary: `#1a1a24` (hover states)
- Accent Primary: `#00ff88` (neon green - AI theme)
- Accent Secondary: `#00cc6a` (darker green)
- Accent Glow: `rgba(0, 255, 136, 0.15)` (glow effects)
- Text Primary: `#ffffff`
- Text Secondary: `#a0a0b0`
- Text Muted: `#606070`
- Border: `#2a2a3a`

#### Color Palette (Light Mode)
- Background Primary: `#fafafa`
- Background Secondary: `#ffffff`
- Background Tertiary: `#f0f0f5`
- Accent Primary: `#00aa5b` (darker green for light mode)
- Text Primary: `#0a0a0f`
- Text Secondary: `#505060`
- Border: `#e0e0e5`

#### Typography
- **Font Family**:
  - Headings: "Outfit" (Google Fonts) - modern geometric sans
  - Body: "DM Sans" (Google Fonts) - clean readable sans
- **Sizes**:
  - Hero Title: 4rem (64px) desktop, 2.5rem mobile
  - Section Titles: 2.5rem (40px) desktop, 1.75rem mobile
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

#### Spacing System
- Section Padding: 6rem vertical (desktop), 4rem (mobile)
- Container Max Width: 1200px
- Card Padding: 1.5rem
- Gap between cards: 1.5rem

#### Visual Effects
- Card shadows (dark): `0 4px 24px rgba(0, 0, 0, 0.4)`
- Glow effect on hover: `0 0 30px rgba(0, 255, 136, 0.2)`
- Border radius: 12px (cards), 8px (buttons), 9999px (pills)
- Backdrop blur: 10px for header
- Gradient overlays on hero section

### Components

#### Navigation
- Fixed header with backdrop blur
- Logo (name abbreviation "SP" or full name)
- Theme toggle button (sun/moon icon)
- Smooth scroll links

#### Hero Section
- Large animated gradient background
- Name with gradient text effect
- Title with typing effect
- Three action buttons with hover animations
- Floating AI-themed decorative elements

#### About Section
- Two-column layout (text + visual)
- AI-themed icon grid
- Highlighted keywords

#### Skills Section
- Category cards with icons
- Skill tags with hover glow
- Progress indicators

#### Projects Section
- Grid of project cards (3 columns desktop, 2 tablet, 1 mobile)
- Card hover effects with scale and glow
- Tech stack badges
- Link buttons

#### Resume Section
- Centered layout
- Large download button
- Brief info text

#### Contact Section
- Two-column: social links + form
- Floating labels on form
- Submit button with loading state

#### Footer
- Social icons
- Copyright text
- Back to top button

### Animations (Framer Motion)
- **Hero**: Staggered fade-in from bottom
- **Sections**: Fade-in on scroll
- **Cards**: Scale + glow on hover
- **Buttons**: Subtle scale + glow pulse
- **Theme Toggle**: Smooth color transition

## Functionality Specification

### Core Features
1. **Theme Toggle**: Dark/Light mode with localStorage persistence
2. **Smooth Scrolling**: All navigation links scroll smoothly
3. **Project Links**: Live demo and GitHub links open in new tabs
4. **Resume Download**: PDF download on button click
5. **Contact Form**: Form validation and submit handling (mailto fallback)
6. **Social Links**: Open social profiles in new tabs
7. **Email Link**: Open default email client

### User Interactions
- Scroll-triggered section animations
- Hover states on all interactive elements
- Focus states for accessibility
- Mobile menu toggle

### Data Handling
- Theme preference stored in localStorage
- Form submission via mailto link (no backend)
- Resume file served locally

### Edge Cases
- Missing project links show disabled state
- Form validation prevents empty submissions
- Fallback fonts if Google Fonts fail
- Graceful degradation without JavaScript

## Acceptance Criteria

### Visual Checkpoints
- [ ] Hero section displays name and title correctly
- [ ] Theme toggle changes colors smoothly
- [ ] All sections visible and properly styled
- [ ] Responsive at all breakpoints
- [ ] Animations play smoothly
- [ ] All hover states work
- [ ] Cards have proper shadows and borders

### Functional Checkpoints
- [ ] Theme persists after page reload
- [ ] All scroll links work
- [ ] External links open in new tabs
- [ ] Resume button triggers download
- [ ] Email link opens mail client
- [ ] Form validates required fields
- [ ] Mobile menu toggles correctly

## Project Structure
```
/portfolio
  /public
    /assets
      resume.pdf
  /src
    /components
      Header.jsx
      Hero.jsx
      About.jsx
      Skills.jsx
      Projects.jsx
      Resume.jsx
      Contact.jsx
      Footer.jsx
    /hooks
      useTheme.js
    App.jsx
    index.css
    main.jsx
  package.json
  vite.config.js
  tailwind.config.js
  postcss.config.js
  index.html
```
