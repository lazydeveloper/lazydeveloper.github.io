# Project Change Log

## April 27, 2025

- **Homepage Post List Styling:**
  - Implemented a hover effect to change the background color of post items (`.single.summary`).
  - Adjusted padding (`padding`, `padding-top`) for post items to refine spacing.
  - *File affected:* `themes/LoveIt/assets/css/_core/_base.scss`

- **Homepage Post List Content:**
  - Removed the "Read More" link from the footer of each post summary.
  - Removed the tags section from the footer of each post summary.
  - Attempted to display the `description` from post front matter instead of the automatic summary (currently reverted).
  - *File affected:* `themes/LoveIt/layouts/_default/summary.html`
