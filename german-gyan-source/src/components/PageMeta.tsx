import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

/**
 * PageMeta — sets per-page <title> and <meta> tags for SEO.
 * Drop this at the top of any page component and fill in the props.
 *
 * Example:
 *   <PageMeta
 *     title="A1 Level German Course | German Gyan"
 *     description="Start learning German from scratch with German Gyan's A1 course..."
 *     keywords="A1 German course, beginner German classes, learn German India"
 *   />
 *
 * NOTE: In a React SPA, meta tags are set by JavaScript after the page loads.
 * This means "view-source:" always shows the default index.html values — that
 * is normal and expected. The live browser, social share crawlers that run JS
 * (Facebook, LinkedIn, Slack), and Google (which executes JS) will all see the
 * correct per-page meta set by this component.
 */
export default function PageMeta({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
}: PageMetaProps) {
  useEffect(() => {
    // Helper: find or create a <meta> element and set its content
    function setMeta(attr: "name" | "property", value: string, content: string) {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    }

    const resolvedTitle = title;
    const resolvedDesc = description;
    const resolvedOgTitle = ogTitle ?? title;
    const resolvedOgDesc = ogDescription ?? description;

    // Page title
    const prevTitle = document.title;
    document.title = resolvedTitle;

    // Standard SEO
    setMeta("name", "description", resolvedDesc);
    if (keywords) setMeta("name", "keywords", keywords);

    // Open Graph
    setMeta("property", "og:title", resolvedOgTitle);
    setMeta("property", "og:description", resolvedOgDesc);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "German Gyan");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", resolvedOgTitle);
    setMeta("name", "twitter:description", resolvedOgDesc);

    // On unmount, restore the index.html defaults so navigating away
    // doesn't leave stale data before the next page's PageMeta fires.
    return () => {
      document.title = prevTitle;
    };
  }, [title, description, keywords, ogTitle, ogDescription]);

  return null;
}
