# Project Change Log

## April 27, 2025

- **Homepage Post List Styling:**
  - Implemented a hover effect to change the background color of post items (`.single.summary`).
  - Adjusted padding (`padding`, `padding-top`) for post items to refine spacing.
  - Made the entire post summary area clickable via an overlay link (`.summary-link-overlay`), while keeping Author and Category links clickable (`z-index` adjustments).
  - *File affected:* `themes/LoveIt/assets/css/_core/_base.scss`

- **Homepage Post List Content:**
  - Removed the "Read More" link from the footer of each post summary.
  - Removed the tags section from the footer of each post summary.
  - Attempted to display the `description` from post front matter instead of the automatic summary (currently reverted).
  - Added overlay link HTML structure.
  - *File affected:* `themes/LoveIt/layouts/_default/summary.html`

- **Homepage Profile Social Icons:**
  - Added horizontal spacing (`margin`).
  - Added a scaling hover effect (`transform: scale(1.5)`).
  - *File affected:* `themes/LoveIt/assets/css/_core/_base.scss`

- **Header Menu Icons (e.g., GitHub):**
  - Added a default subtle glow effect (`filter: drop-shadow`).
  - Added a scaling hover effect (`transform: scale(1.2)`).
  - *File affected:* `themes/LoveIt/assets/css/_core/_base.scss`

- **Header Bar:**
  - Briefly added and then removed a `box-shadow` effect.
  - *File affected:* `themes/LoveIt/assets/css/_partial/_header.scss`
