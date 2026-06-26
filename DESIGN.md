---
name: Studio Portfolio System
colors:
  surface: '#fff8f5'
  surface-dim: '#e6d7cf'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#faebe2'
  surface-container-high: '#f4e5dd'
  surface-container-highest: '#eee0d7'
  on-surface: '#211a15'
  on-surface-variant: '#51443a'
  inverse-surface: '#372f29'
  inverse-on-surface: '#fdeee5'
  outline: '#837469'
  outline-variant: '#d5c3b6'
  surface-tint: '#835425'
  primary: '#6f4315'
  on-primary: '#ffffff'
  primary-container: '#8b5a2b'
  on-primary-container: '#ffddc2'
  inverse-primary: '#f9ba82'
  secondary: '#615e55'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2d6'
  on-secondary-container: '#67645b'
  tertiary: '#584b35'
  on-tertiary: '#ffffff'
  tertiary-container: '#71634c'
  on-tertiary-container: '#f4e0c3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc1'
  primary-fixed-dim: '#f9ba82'
  on-primary-fixed: '#2e1500'
  on-primary-fixed-variant: '#683d0f'
  secondary-fixed: '#e7e2d6'
  secondary-fixed-dim: '#cbc6bb'
  on-secondary-fixed: '#1d1c15'
  on-secondary-fixed-variant: '#49473e'
  tertiary-fixed: '#f3e0c3'
  tertiary-fixed-dim: '#d6c4a8'
  on-tertiary-fixed: '#231a08'
  on-tertiary-fixed-variant: '#51452f'
  background: '#fff8f5'
  on-background: '#211a15'
  surface-variant: '#eee0d7'
typography:
  display:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
This design system is built for a senior full-stack developer whose work bridges the gap between technical precision and high-end aesthetic execution. The brand personality is **sophisticated, intentional, and editorial**, moving away from "tech-bro" tropes in favor of a curated, gallery-like experience.

The visual style is **Modern Minimalism with Tactile Warmth**. It leverages a high-contrast foundation (Pure White and Dark Coffee) softened by a warm, organic secondary palette. The emotional response should be one of "effortless competence"—the UI does not shout; it recedes to allow the portfolio work to take center stage.

Key characteristics:
- **Quiet Luxury:** High-end typography and generous whitespace.
- **Warm Professionalism:** Avoiding the coldness of pure grays by using coffee and beige tones.
- **Precision:** Perfect alignment and consistent rhythmic intervals.

## Colors
The palette is rooted in an organic, earthy spectrum that differentiates the developer from standard SaaS aesthetics.

- **Primary (#8B5A2B):** A rich coffee brown used sparingly for high-intent actions, active states, and focal points.
- **Neutral (#1F1813):** A deep, warm charcoal used for maximum legibility in typography.
- **Surface (#F1ECE0):** A soft beige used to define containers and section backgrounds, providing a subtle "paper" feel.
- **Secondary Text (#B8A78C):** A muted taupe for meta-data, captions, and secondary labels to maintain hierarchy without clutter.

## Typography
**Manrope** is selected for its modern, geometric structure that remains highly legible and balanced. 

The typographic hierarchy relies on **generous letter spacing** for headings and labels to evoke an editorial, high-end feel. 
- **Headings:** Use `Dark Coffee` with tight tracking on large displays and wider tracking on sub-headers.
- **Body:** Stick to `Dark Coffee` for primary reading and `Muted Taupe` for secondary information.
- **Labels:** Always use uppercase with increased letter spacing for a "captioned" look in portfolio pieces.

## Layout & Spacing
The layout follows a **fixed grid** approach on desktop to ensure content remains centered and easily scannable, transitioning to a fluid model on smaller devices.

- **Grid:** A 12-column system with 24px gutters.
- **Vertical Rhythm:** Sections should be separated by `xl` (80px) or more to emphasize the minimalist aesthetic.
- **Margins:** Desktop margins are flexible to center the 1200px container; mobile margins are set to 24px.
- **Alignment:** Strong left-alignment for body text, with occasional centered display type for impact sections like the Hero or Contact CTA.

## Elevation & Depth
This design system avoids heavy shadows, favoring **tonal layering** and **subtle borders** to define depth.

- **Level 0 (Background):** Pure White (#FFFFFF).
- **Level 1 (Surface):** Soft Beige (#F1ECE0) with no shadow. Used for section blocks and secondary cards.
- **Level 2 (Interactive):** Pure White cards with a 1px border (#F1ECE0) and an extremely soft, diffused shadow (0px 4px 20px rgba(31, 24, 19, 0.04)).
- **Interactions:** Hover states should involve a slight vertical lift (2-4px) and a subtle increase in shadow density.

## Shapes
Shapes are refined and "soft-modern." 

A consistent radius of **8px to 12px** is applied to all cards, buttons, and input fields. 
- **Buttons:** 8px radius for a structured look.
- **Cards/Containers:** 12px (rounded-lg) to provide a gentle container for project imagery.
- **Tags/Chips:** Fully pill-shaped for a distinct visual contrast against rectangular elements.

## Components

### Buttons
- **Primary:** Background `#8B5A2B`, Text `#FFFFFF`. Solid, no border.
- **Secondary:** Transparent background, 1.5px border `#8B5A2B`, Text `#8B5A2B`.
- **Hover:** Primary buttons shift 5% darker; Secondary buttons gain a faint `#F1ECE0` background tint.

### Project Cards
- Background: `#FFFFFF`. 
- Border: 1px `#F1ECE0`.
- Padding: `md` (24px).
- Image: 12px corner radius, slight zoom on hover.

### Form Inputs
- Background: `#FFFFFF`.
- Border: 1px solid `#B8A78C`.
- Focus State: Border color changes to `#8B5A2B` with a 2px soft outer glow.

### Chips & Tags
- Used for tech stacks (e.g., "React", "Node.js").
- Background: `#F1ECE0`.
- Text: `#1F1813` (Label-sm).
- Border: None.

### Navigation
- Sticky header with a subtle backdrop blur (glassmorphism effect) and a fine 1px bottom border in `#F1ECE0`.
- Links use `label-md` style with a bottom-line reveal on hover.