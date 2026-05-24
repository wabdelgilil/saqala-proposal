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
- [x] **Task 6: Professional Infographic Generation & Integration**
  - [x] Analyze A4 print template layout example with Arabic text and design styling
  - [x] Overwrite `FlowChart.tsx` component to dynamically render all 24 flowcharts in a gorgeous, high-fidelity corporate infographic style (similar to the template: curved color-coded connections, top title cards, circular icons, step numbers, and bottom tab badges)
  - [x] Retain perfect vector-rendered Arabic text matching the Cairo/Tajawal executive fonts
  - [x] Verify Next.js Turbopack build compilation and visual page routing
- [x] **Task 7: Print Layout Enhancements & FlowChart Optimization**
  - [x] Implement auto-switching layout to Left-to-Right (LR) in `FlowChart.tsx` if a TD layout contains more than 3 nodes in any level, expanding it vertically instead of horizontally to fit A4 page width.
  - [x] Enhance Arabic word-wrapping in flowchart nodes using `wordBreak: "keep-all", overflowWrap: "break-word"` to prevent disjointed word splits.
  - [x] Increase card node font sizes (title to `11px`, subtext to `9px`) and size dimensions to improve printed text readability.
  - [x] Develop a smart SVG connector router to cleanly connect nodes in all relative directions, avoiding crossing lines.
  - [x] Apply custom `.page-break` and `break-inside: avoid` rules to section dividers and card wrappers to guarantee no charts, tables, or sections split across pages in A4 print layout.
  - [x] Simplify card design: remove the overlapping top circle and bottom tab badges, remove the step numbers, and place a single central icon container inside the card body. This ensures arrowheads touch flat boundaries cleanly with zero overlap or layout obstructions.
  - [x] Implement dynamic parallel edge offsets and intermediate card bypass curves in `FlowChart.tsx` to prevent overlapping lines and text labels in diagrams with multiple loops between the same nodes (such as the warehouse and work order link).
  - [x] Calculate column and row gaps dynamically based on layout direction (expanding column gap `gapX` to `120` in LR mode), giving connection labels enough room to render fully without clipping behind card boundaries.
  - [x] Create and integrate a premium vertical Sequence Diagram component (`SequenceDiagram.tsx`) for complex loops (replacing the Warehouse-to-Technician flowchart) to display chronological steps, participants, and interactions as clean horizontal arrows, resolving diagram overlap and clutter.
  - [x] Develop a self-healing layout fallback switcher in `FlowChart.tsx` that automatically overrides `isLR` to `false` (TD/vertical mode) if an LR diagram has too many levels (width > 900px) and a vertical layout would be narrower, saving wide charts (like Offline Mode) from scaling down microscopically.
- [x] **Task 8: ProcessStep unification with FlowChart**
  - [x] Replace all `<ProcessStep>` blocks in `s06-marahil.tsx`, `s07-warsha.tsx`, `s08-hawkama.tsx`, `s09-salamat-mowazafin.tsx`, and `s10-salamat-faniyeen.tsx` with unified premium `<FlowChart>` components.
  - [x] Center SVG elements (`mx-auto block`) inside their overflow-x-auto wrappers in `FlowChart.tsx` and `SequenceDiagram.tsx` to center simple/narrow diagrams while allowing complex/wide diagrams to fill the viewport and scroll.
  - [x] Confirm clean Next.js production build without any warnings/errors.

- [x] **Task 9: Print Layout Professionalization & Margin Fixes**
  - [x] Fixed nesting `break-inside: avoid` browser bug by removing `.bg-white.rounded-xl` from the avoidance list, solving the 104-page print explosion.
  - [x] Removed print margins/padding on the outer content wrapper in `page.tsx` to eliminate double page-margins and squished layouts.
  - [x] Stripped content cards of borders, rounded corners, shadows, and background colors in print mode to display text, tables, and charts on clean, borderless white paper pages.
  - [x] Configured native `@page` margins of `24mm 18mm 20mm 18mm` (so browser handles page margins natively and repeats them on every page, preventing content overlapping on pages 2+) and positioned header/footer elements via negative offsets (`top: -14mm` and `bottom: -10mm` relative to printable area).
  - [x] Fixed flowchart card borders and background disappearing in print by changing the print card override selector to target only direct children of sections (`section > .bg-white.rounded-xl`), protecting deep-nested flowchart node elements.
  - [x] Hid custom headers/footers on the cover page using z-index layering and cover page solid color bleed overrides.
  - [x] Confirmed clean Next.js production build without any warnings/errors.

## Section 2: Future Updates

- [ ] Add support for multiple themes (e.g. grayscale print mode toggle)
- [ ] Integrate with automated PDF printing scripts (e.g. Playwright or Puppeteer) for direct A4 generation

