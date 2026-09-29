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
const backgroundControl = document.getElementById('background-control');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateBackgroundControl() {
  const paused = backgroundVideo.paused;
  const label = paused ? 'Play background animation' : 'Pause background animation';
  backgroundControl.setAttribute('aria-label', label);
  backgroundControl.title = label;
  backgroundControl.firstElementChild.textContent = paused ? '▷' : 'Ⅱ';
}
async function playBackground() {
  if (!backgroundVideo.getAttribute('src')) backgroundVideo.src = backgroundVideo.dataset.src;
  try { await backgroundVideo.play(); backgroundControl.hidden = false; }
  catch { backgroundControl.hidden = true; }
}
if (!motionPreference.matches) playBackground();
backgroundControl.addEventListener('click', () => {
  if (backgroundVideo.paused) playBackground();
  else backgroundVideo.pause();
});
backgroundVideo.addEventListener('play', updateBackgroundControl);
backgroundVideo.addEventListener('pause', updateBackgroundControl);
motionPreference.addEventListener('change', (event) => {
  if (event.matches) { backgroundVideo.pause(); backgroundControl.hidden = true; }
  else playBackground();
});
