/* ================================
   Create flexible div container
================================ */
function createDiv(id) {
  const box = document.createElement("div");
  box.id = id;

  box.style.flex = "1";
  box.style.background = "var(--box-bg)";

  return box;
}


/* ================================
   Update flex values of elements
================================ */
function changeElementsFlex(...pairs) {
  pairs.forEach(item => {
    const elementId = item[0];
    const flexValue = item[1];

    const node = document.getElementById(elementId);
    if (!node) return;

    node.style.flex = flexValue;
  });
}


/* ================================
   Create standardized button
================================ */
function createButton(id, text) {
  const button = document.createElement("button");

  button.id = id;
  button.textContent = text;

  button.style.display = "block";
  button.style.width = "100%";
  button.style.boxSizing = "border-box";

  return button;
}


/* ================================
   Script load marker
================================ */
(() => {
  console.log("UI helper loaded successfully");
})();
