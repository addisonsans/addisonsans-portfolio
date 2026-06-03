import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const entries = (await getCollection("writing", ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const items = entries
    .map(
      (e) => `
    <item>
      <title><![CDATA[${e.data.title}]]></title>
      <link>${new URL(`/writing/${e.slug}/`, site).toString()}</link>
      <guid>${new URL(`/writing/${e.slug}/`, site).toString()}</guid>
      <pubDate>${e.data.date.toUTCString()}</pubDate>
      <description><![CDATA[${e.data.summary}]]></description>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Addison Sans — Writing</title>
    <link>${site?.toString()}</link>
    <description>Notes and essays by Addison Sans.</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
