import { NextPage } from "next";

const initialSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://leomaramiel.tech</loc>
        <lastmod>2020-10-04</lastmod>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>https://leomaramiel.tech/work</loc>
        <lastmod>2020-10-04</lastmod>
        <changefreq>weekly</changefreq>
    </url>
</urlset>
`;

const Sitemap: NextPage<unknown> = () => null;

Sitemap.getInitialProps = async ({ res }) => {
  res?.setHeader("Content-Type", "text/xml");
  res?.write(initialSitemap);
  res?.end();
};

export default Sitemap;
