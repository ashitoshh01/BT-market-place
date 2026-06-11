---
name: Vently Design System
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#cfc2d4'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#988d9e'
  outline-variant: '#4c4452'
  surface-tint: '#dfb7ff'
  primary: '#dfb7ff'
  on-primary: '#4a007f'
  primary-container: '#6b21a8'
  on-primary-container: '#d7a8ff'
  inverse-primary: '#803abd'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#faba72'
  on-tertiary: '#482900'
  tertiary-container: '#6d4100'
  on-tertiary-container: '#eeaf68'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f1dbff'
  primary-fixed-dim: '#dfb7ff'
  on-primary-fixed: '#2d0050'
  on-primary-fixed-variant: '#661aa3'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#faba72'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#111317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The brand personality is rooted in **Modern Minimalism** with a **Glassmorphic** execution, designed to provide a sanctuary for anonymous expression. The target audience seeks a premium, safe, and high-tech environment to offload emotional weight.

The UI evokes a sense of "digital tranquility"—the deep, dark background provides a void-like canvas that minimizes eye strain, while the translucent glass elements and vibrant organic gradients suggest a living, breathing marketplace of human experience. The aesthetic balances the precision of developer-grade tools with the soft, ethereal qualities of a wellness application.

## Colors
The palette is centered on a "Midnight Void" base (`#0d0f12`) to ensure maximum depth. 

- **Primary (Deep Purple):** Represents the introspection and mystery of anonymity. Used for primary actions and soft glows.
- **Secondary (Emerald Green):** Represents growth, safety, and the "relief" found in venting. Used for success states and secondary accents.
- **Glass Surfaces:** Utilizes ultra-low opacity whites to create layers of depth without breaking the dark-mode immersion.
- **Gradients:** A transitional gradient between the purple and emerald is used sparingly for high-impact call-to-actions and "active" emotional states.

## Typography
The design system utilizes **Inter** exclusively to maintain a systematic, utilitarian, yet modern feel. 

- **Weight Strategy:** Headlines use SemiBold and Bold weights to anchor the glass containers. Body text remains at Regular weight to ensure maximum legibility against the dark, blurred backgrounds.
- **Micro-copy:** Small labels use uppercase tracking to provide a technical, "dashboard" aesthetic.
- **Safety:** Line heights are generous (minimum 1.5x for body) to ensure the interface feels "airy" and un-claustrophobic, supporting the emotional safety narrative.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a preference for wide internal margins to enhance the feeling of "ventilation." 

- **Desktop:** A 12-column grid with a 20px gutter. Content is centered with a max-width of 1440px to prevent excessive scanning.
- **Mobile:** A 4-column grid with 16px side margins. 
- **Spacing Rhythm:** Based on an 8px linear scale. Large components (like glass cards) should use 32px or 40px of internal padding to maintain the premium, high-end dashboard feel.

## Elevation & Depth
Depth is achieved through **Glassmorphism** rather than traditional drop shadows. 

- **Surface Layers:** The background is the lowest layer. Glass cards sit on top, using `backdrop-filter: blur(12px)` and a `1px` border of `rgba(255,255,255,0.1)`. 
- **Visual Stacking:** Higher-priority modals or dropdowns increase the background blur (up to 24px) and slightly increase the background opacity to `rgba(255,255,255,0.08)`.
- **Glows:** Instead of shadows, interactive elements emit a soft, low-opacity radial glow in the primary purple or secondary emerald color when focused or active.

## Shapes
Shapes are consistently **Rounded** (0.5rem / 8px base) to strike a balance between professional software and approachable wellness. 

- **Small elements:** (Checkboxes, tags) use the base 8px radius.
- **Medium elements:** (Buttons, inputs) use the `rounded-lg` 16px radius for a softer touch.
- **Large containers:** (Dashboard cards) use the `rounded-xl` 24px radius to emphasize the "pod" or "sanctuary" feel.

## Components
- **Glass Cards:** The primary container. Must have a subtle inner stroke (`glass-border`) and the background blur. Content within cards should have high padding.
- **Buttons:** 
  - *Primary:* Vibrant purple-to-emerald gradient with white text. 
  - *Secondary:* Glass background with a solid 1px purple border.
- **Inputs:** Darker than the background (`#080a0c`) with a `glass-border`. On focus, the border transitions to the primary purple with a 4px outer glow.
- **Chips/Tags:** Small, pill-shaped glass elements with low-opacity emerald backgrounds for "Safe" tags and purple for "Expressive" tags.
- **Venting Feed:** Items in the feed are separated by glass dividers. No hard lines; only subtle changes in translucency.
- **Sentiment Indicators:** Small, vibrant gradient orbs that pulse slightly to indicate active "listeners" or high-engagement vents.