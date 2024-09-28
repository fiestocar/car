function getDataUrl(path) {
  return new URL(`/public/data/${path}`, import.meta.url).href;
}

export {
  getDataUrl
}