'use strict';
const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('bibtex');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyButton.textContent = 'Copied';
    status.textContent = 'BibTeX copied to clipboard.';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2500);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
  }
});

const backgroundVideo = document.getElementById('hero-background');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
async function playBackground() {
  if (!backgroundVideo.getAttribute('src')) backgroundVideo.src = backgroundVideo.dataset.src;
  try { await backgroundVideo.play(); }
  catch { /* Keep the poster visible when autoplay is unavailable. */ }
}
if (!motionPreference.matches) playBackground();
motionPreference.addEventListener('change', (event) => {
  if (event.matches) backgroundVideo.pause();
  else playBackground();
});
