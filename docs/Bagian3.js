/**
 * FIXED VERSION - more flexible
 */

function clearTextarea(id) {
  const el = document.getElementById(id);

  if (!el) return;

  el.value = "";
}

function copyTextareaFromTo(src, dest) {
  const el1 = document.getElementById(src);
  const el2 = document.getElementById(dest);

  if (!el1 || !el2) return;

  el2.value = el1.value;
}

// marker
(() => {
  console.log("[marker] FIXED 26b43.js loaded");
})();
