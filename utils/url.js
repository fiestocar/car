function getDataUrl(path) {
  return new URL(`/public/data/${path}`, import.meta.url).href;
}

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/[&<>"'\/]/g, function (char) {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "\\":
        return "&#39;";
      case "/":
        return "&#x2F;";
      default:
        return char;
    }
  });
}

function getId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
  return escapeHTML(urlParams.get("id"));
}

export { getDataUrl, escapeHTML, getId };
