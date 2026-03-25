/**
 * Utility functions for scroll operations
 */

/**
 * Smoothly scrolls the page to the top
 * Used across the app when navigating between pages for better UX
 */
export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};
