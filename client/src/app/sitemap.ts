export default function sitemap() {
  const routes = [""].map((route) => ({
    url: `http:localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
