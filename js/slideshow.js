/**
 * Godwin Praise Portfolio - Selected Projects Looping Slideshow
 * Passive continuous marquee strip with hover pause & reduced motion handling
 */

document.addEventListener("DOMContentLoaded", () => {
  const marqueeContainer = document.querySelector(".marquee-container");
  const marqueeTrack = document.querySelector(".marquee-track");

  if (!marqueeContainer || !marqueeTrack) return;

  // Check prefers-reduced-motion
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function updateMotionPreference() {
    if (mediaQuery.matches) {
      marqueeTrack.style.animation = "none";
      marqueeContainer.style.overflowX = "auto";
    } else {
      marqueeTrack.style.animation = "";
      marqueeContainer.style.overflowX = "hidden";
    }
  }

  mediaQuery.addEventListener("change", updateMotionPreference);
  updateMotionPreference();

  // Pause on touch for mobile devices
  marqueeContainer.addEventListener("touchstart", () => {
    if (!mediaQuery.matches) {
      marqueeTrack.style.animationPlayState = "paused";
    }
  }, { passive: true });

  marqueeContainer.addEventListener("touchend", () => {
    if (!mediaQuery.matches) {
      marqueeTrack.style.animationPlayState = "running";
    }
  }, { passive: true });
});
