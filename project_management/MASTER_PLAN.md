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

- [x] **Task 10: Screen and Print A4 Page Layout Unification**
  - [x] Restored `@page { margin: 0; }` to automatically hide browser headers and footers.
  - [x] Set print margins to `body { margin: 24mm 18mm 20mm 18mm !important; }` which Chrome repeats natively on every printed page.
  - [x] Positioned fixed headers at `top: 10mm` and footers at `bottom: 10mm` inside margins to prevent overlapping.
  - [x] Created `.a4-page` and `.cover-bleed` classes to display pages on the screen as A4 sheets with shadows (`box-shadow`) and margins on a slate-100 background (resembling MS Word or Google Docs).
  - [x] Collapsed `.a4-page` on print (`width: 100%`, `padding: 0`, `margin: 0`) and forced page breaks before every A4 container to align perfectly with print margins.
  - [x] Confirmed clean Next.js production build without any warnings/errors.

- [x] **Task 11: REDESIGN: Split Sections into Page-by-Page A4 Layout (Screen & Print WYSIWYG)**
  - [x] Revert the previous body print margin changes and configure full-bleed A4 print mode (`@page { size: A4; margin: 0; }`).
  - [x] Design a reusable `<A4Page>` React component with built-in A4 screen/print styling, absolute headers/footers, and page numbers visible on both screen and print.
  - [x] Update `src/app/globals.css` to define a clean, fixed-size A4 page stylesheet (`width: 210mm`, `height: 297mm`, `overflow: hidden`) that preserves exact dimensions on print and screen.
  - [x] Refactor all 10 section files (`s01` to `s10`) to split their content into consecutive `<A4Page>` components, manually adjusting sizes and spacing to ensure no layout overflows.
  - [x] Verify page rendering on screen and build success via `npm run build`.
- [x] **Task 12: Fix Site Classification and Vendor Evaluation Tables Data Binding**
  - [x] Corrected typos in `s01-maktab.tsx` where columns arrays were passed as rows (`siteClassCols` -> `siteClassRows` and `vendorEvalCols` -> `vendorEvalRows`).
  - [x] Verified Next.js compilation runs successfully after fixing data table inputs.
- [x] **Task 13: Resolve Page Overflow and Cut-off Tables by Dynamic Content Shifting**
  - [x] Shifted `إدارة العقود والموردين` table from Page 9 to a new Page 10 to resolve the vertical cutoff bug.
  - [x] Split the overcrowded Page 12 (RACI Matrix, Legend, and Golden Rule) by isolating the 14-row RACI Matrix on Page 13 and shifting the Legend, CallOutBox, and Succession Plan to a new Page 14.
  - [x] Automated page number increment adjustments (+2 offset) for all subsequent sections (s02 to s10) using a script to keep page counters synced from Page 10 up to Page 61.
  - [x] Verified successful production compilation via `npm run build`.
- [x] **Task 14: Remove Confidential Footer Text**
  - [x] Removed the "وثيقة سرية · ٢٠٢٦" text from the footer in `src/components/A4Page.tsx`.
  - [x] Preserved the empty `<span>` element to maintain correct right-to-left alignment of page numbers.
  - [x] Verified successful production build compilation.
- [x] **Task 15: Add Preparer Name to Cover Page**
  - [x] Removed the "CONFIDENTIAL · 2026" text from the cover page footer in `src/components/CoverPage.tsx`.
  - [x] Added "تمت الدراسة وإعدادها بواسطة: وائل عبد الجليل" to the cover page footer.
  - [x] Verified successful production compilation via `npm run build`.
- [x] **Task 16: Resolve Flowchart Overflow on Page 48 (Business Continuity)**
  - [x] Shifted the 6-level vertical flowchart `خطة الاستمرارية التشغيلية` from Page 48 to a newly-inserted dedicated Page 49 in `s05-cmms.tsx`.
  - [x] Moved `الحقيبة الورقية للطوارئ` table from Page 50 to Page 48 to balance content.
  - [x] Automated page number increment adjustments (+1 offset) for all subsequent sections (s06 to s10) using a script to sync page counters up to Page 62.
  - [x] Verified successful production build compilation.
- [x] **Task 17: Add Cigalah Group Logo to Header**
  - [x] Copied Cigalah Group logo image from the brain directory to the project's public image assets folder.
  - [x] Replaced the text "مجموعة مؤسسات سقالة" in the left header of all pages in `src/components/A4Page.tsx` with the Cigalah Group logo image (`cigalah_logo.png`).
  - [x] Verified successful production compilation via `npm run build`.
- [x] **Task 18: Resolve Flowchart Overflow on Page 44 (Offline Mode)**
  - [x] Shifted the 7-node vertical flowchart `آلية العمل بدون إنترنت (Offline Mode)` to have Page 44 entirely to itself.
  - [x] Relocated `آلية العمل بدون اتصال` and `دور النظام في التشغيل المركزي` tables to a newly-inserted Page 45.
  - [x] Automated page number increment adjustments (+1 offset) for all subsequent sections (s06 to s10) using a script to sync page counters up to Page 63.
  - [x] Verified successful production compilation via `npm run build`.
- [x] **Task 19: Dynamic Flowchart Scaling for Deep Vertical Layouts**
  - [x] Modified `FlowChart.tsx` to automatically detect deep vertical layouts using `maxLevel`.
  - [x] Programmed a dynamic scale factor for flowcharts with 6 levels (`cardH=80, gapY=35`) and 7+ levels (`cardH=75, gapY=30`) to fit within the `750px` printable height of A4 pages.
  - [x] Resolved truncation/cutoff bugs on Page 44 (Offline Mode, 7 levels) and Page 50 (Business Continuity, 6 levels) without breaking standard sizes for simpler diagrams.
  - [x] Verified successful production compilation via `npm run build`.
- [x] **Task 20: Optimized Flowchart Layout Fallback Threshold & Dynamic Label Widths**
  - [x] Adjusted the vertical fallback threshold in `FlowChart.tsx` from `900px` to `1000px` to keep moderately sized diagrams horizontal (`isLR`).
  - [x] Configured dynamic column gap spacing (`resolvedGapX = 80px` for maxLevel <= 3) to allow simple diagrams to render horizontally without occupying large vertical page space.
  - [x] Resolved flowchart cutoff bugs on Page 51 (Integration Scenario, 4 levels) and Page 19 (Dispatch Team, 4 levels) by keeping them horizontal.
  - [x] Programmed dynamic background rectangle widths (`rectW`) based on connection label character length to prevent text clipping.
  - [x] Verified successful production compilation via `npm run build`.
- [x] **Task 21: Shift feedback connection arrow label under bypassed node**
  - [x] Programmed cubic Bezier coordinate calculator `getBezierPoint` to interpolate path coordinates.
  - [x] Shifted `t` value to `0.8` (for backward feedback loops) and `0.2` (for forward curves) on bypassed connection edges where level difference > 1.
  - [x] Relocated the "إغلاق" (Close) label on Page 51 in `سيناريو التكامل` flowchart away from the bottom of the intermediate "مدير الصيانة" block into the open gap between "مدير الصيانة" and "نظام CMMS".
  - [x] Verified successful build compilation via `npm run build`.
- [x] **Task 22: Resolve page overflows and cut-off flowcharts/tables by splitting pages**
  - [x] Split Page 53 in `s06-marahil.tsx` into Pages 53 and 54, isolating the "مراحل المشروع" flowchart.
  - [x] Split Page 56 in `s06-marahil.tsx` into Pages 56 and 57, isolating meetings/reviews and fixing reports typo.
  - [x] Split Page 58 in `s07-warsha.tsx` into Pages 58 and 59, isolating the "التجهيزات والمعدات الأساسية" table.
  - [x] Split Page 60 in `s07-warsha.tsx` into Pages 60 and 61, isolating the "سير العمل في الورشة" flowchart.
  - [x] Split Page 62 in `s08-hawkama.tsx` into Pages 62 and 63, isolating the safety documents table.
  - [x] Split Page 64 in `s08-hawkama.tsx` into Pages 64 and 65, isolating the accident investigation flowchart.
  - [x] Split Page 66 in `s09-salamat-mowazafin.tsx` into Pages 66 and 67, isolating the employee safety principles flowchart.
  - [x] Automated page number mapping using `set_page_numbers.js` to ensure perfect continuous sequence up to Page 70.
  - [x] Verified build successfully compiled using `npm run build`.
- [x] **Task 23: Resolve second batch of page overflows and cut-off flowcharts/tables**
  - [x] Set `dir="LR"` on "فرق تشغيل مركزية متحركة" flowchart on Page 19 in `s02-tawheed.tsx`, reducing its height and fixing Page 19.
  - [x] Split Page 22 in `s02-tawheed.tsx` into Pages 22 and 23, moving the challenges table.
  - [x] Split Page 29 in `s03-makhazen.tsx` into Pages 30 and 31, moving the work cycle table.
  - [x] Programmed dynamic card & gap scaling solver inside `FlowChart.tsx` for horizontal (LR) layouts with tall columns (`maxNodesInLevel` >= 5), dynamically reducing card height to `75px` / `80px` / `90px` to fit inside margins.
  - [x] Split Page 32 in `s04-adawat.tsx` into Pages 32 and 33, isolating the "أهداف النظام" flowchart.
  - [x] Split Page 35 in `s04-adawat.tsx` into Pages 38 and 39, isolating the "نظام الحجز للمعدات المشتركة" flowchart.
  - [x] Run `set_page_numbers.js` script to recalculate and write correct sequence of page numbers for all sections (from s01 through s10) to accommodate the new 73-page sequence.
  - [x] Verified successful build compilation via `npm run build`.
- [x] **Task 24: Resolve third batch of page overflows & optimize flowchart bypass offsets**
  - [x] Programmed dynamic `bypassOffset` scaling in `FlowChart.tsx` to ensure connection curves clear intermediate cards.
  - [x] Split Page 1 in `s01-maktab.tsx` into Pages 1 and 2, and Page 2 into Pages 3 and 4 to isolate tables.
  - [x] Split Page 16 in `s02-tawheed.tsx` into Pages 16 and 17, and Page 18 into Pages 19 and 20 to isolate tables.
  - [x] Split Page 42 in `s05-cmms.tsx` into Pages 42 and 43 to isolate goals table.
  - [x] Updated page maps in `set_page_numbers.js` and executed script to synchronize sequence to 78 pages.
  - [x] Verified successful build compilation via `npm run build`.
- [x] **Task 25: Clarify Post-Launch Human Resources Re-evaluation**
  - [x] Added Post-Launch HR Re-evaluation note to Section 2 conclusion in Markdown study documents.
  - [x] Added `CallOutBox` for HR Re-evaluation in the React proposal page (`s02-tawheed.tsx`).
  - [x] Verified successful build compilation via `npm run build`.

## Section 2: Future Updates

- [ ] Add support for multiple themes (e.g. grayscale print mode toggle)
- [ ] Integrate with automated PDF printing scripts (e.g. Playwright or Puppeteer) for direct A4 generation









