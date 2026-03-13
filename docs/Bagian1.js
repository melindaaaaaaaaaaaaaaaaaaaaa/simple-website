/* ================================
   Container styling helper
================================ */
function getContainer(id, width = "320px") {
  const element = document.getElementById(id);

  if (!element || element.tagName !== "DIV") return null;

  element.style.marginTop = "1em";
  element.style.width = width;
  element.style.background = "var(--box-bg)";
  element.style.border = "0 solid var(--border)";
  element.style.display = "flex";

  return element;
}


/* ================================
   Textarea creator helper
================================ */
function createTextarea(id, height = "12em") {
  const area = document.createElement("textarea");
  area.id = id;

  area.style.flex = "1";
  area.style.height =
    typeof height === "number" ? height + "px" : height;

  area.style.overflowY = "auto";
  area.style.fontFamily = "monospace";
  area.style.fontSize = "12px";
  area.style.lineHeight = "1.5";
  area.style.padding = "4px 8px";
  area.style.resize = "none";
  area.style.boxSizing = "border-box";

  return area;
}


/* ================================
   Custom console output handler
================================ */
const consolex = {
  target: null,
  newline: "\n",

  setEOL(char) {
    this.newline = char;
  },

  setOutput(el) {
    this.target =
      el instanceof HTMLTextAreaElement ? el : null;
  },

  log(...data) {
    if (!this.target) return;

    const text = data
      .map(item =>
        typeof item === "object"
          ? JSON.stringify(item, null, 2)
          : String(item)
      )
      .join(" ");

    this.target.value += text + this.newline;

    // auto scroll
    this.target.scrollTop = this.target.scrollHeight;
  },

  clear() {
    if (this.target) {
      this.target.value = "";
    }
  }
};


/* ================================
   Load marker
================================ */
(() => {
  console.log("helper script loaded");
})();
