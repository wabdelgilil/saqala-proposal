# MASTER PLAN - Saqala Centralized Maintenance Proposal Layout Improvements

This master plan tracks the design and layout improvements for the `saqala-proposal` project to make it print-perfect (A4 PDF) for presentation to management.

## Section 1: MVP (Software First Version)

- [x] **Task 1: Project Management & Setup**
  - [x] Create project management files (`MASTER_PLAN.md`, `COMPLETED_WORK.md`)
  - [x] Initialize standard implementation plan and checklist
- [x] **Task 2: Global Print Styles & Typography (`src/app/globals.css` & `src/app/layout.tsx`)**
  - [x] Import premium Arabic font (Tajawal) from Google Fonts
  - [x] Set up print styles: `@page` default margins (`16mm 18mm`), and first-page (cover) margins (`0` via `.cover-bleed` margin overrides)
  - [x] Configure dynamic page numbers in print media (`counter(page)`)
  - [x] Ensure non-splitting elements (`break-inside: avoid` on tables, cards, SVGs)
- [x] **Task 3: Layout Alignment Fixes for Arabic (RTL)**
  - [x] Update `src/components/CallOutBox.tsx` to use right borders (`border-r-4`) instead of left borders
  - [x] Update `src/components/ProcessStep.tsx` to align connection lines to the right (`right-[19px]`) for RTL timelines
  - [x] Update `src/components/DataTable.tsx` to align headers to the right (`text-right`) to match the Arabic table data
- [x] **Task 4: Flowchart & Section Improvements**
  - [x] Convert `FlowChart.tsx` layouts and edges to flow naturally from right to left (RTL) to match Arabic reading direction
  - [x] Clean up arbitrary colors in `src/components/CoverPage.tsx` and replace them with standard Tailwind theme classes
  - [x] Set up strict page breaks (`break-before: page`) for the 10 sections in `src/app/page.tsx`, reset spacing with `print:space-y-0`, and hide `<hr>` elements with `print:hidden`
- [x] **Task 5: Verification & PDF Generation Test**
  - [x] Run a test build to ensure static export works (`npm run build`)
  - [x] Verify print styles output via layout checks and emulated prints

## Section 2: Future Updates

- [ ] Add support for multiple themes (e.g. grayscale print mode toggle)
- [ ] Integrate with automated PDF printing scripts (e.g. Playwright or Puppeteer) for direct A4 generation
