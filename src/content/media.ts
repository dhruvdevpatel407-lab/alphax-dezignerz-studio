/**
 * Videos: add MP4 files under `public/portfolio/videos/` (see PORTFOLIO-FILES.md).
 * Until your file exists, the site uses `fallbackReelMp4` (demo clip).
 */

/** On-brand fallback when a reel MP4 is missing (e.g. reel-6 before compress + push) */
export const fallbackReelMp4 = "/portfolio/videos/showreel.mp4";

/** Homepage hero reel — add `public/portfolio/videos/showreel.mp4` */
export const siteVideos = {
  showreel: "/portfolio/videos/showreel.mp4",
} as const;

export function reelVideoSrc(reelId: string): string {
  return `/portfolio/videos/${reelId}.mp4`;
}
