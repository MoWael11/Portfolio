export default function sitemap() {
  const routes = [""].map((route) => ({
    url: `https://mowael.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
