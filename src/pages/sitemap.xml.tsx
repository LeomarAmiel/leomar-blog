import { GetServerSidePropsContext } from "next";
import { Component } from "react";

const initialSitemap = `<?xml version="1.0" encoding="utf-8"?>
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

class Sitemap extends Component {}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  res?.setHeader("Content-Type", "text/xml");
  res?.write(initialSitemap);
  res?.end();
};

export default Sitemap;
