import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { BLOG_CATEGORIES } from "@/lib/blog/content";
import { allBlogPosts, allDocsPosts } from "content-collections";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();
  let domain = headersList.get("host") as string;
  let protocol = "https";

  const baseUrl = `${protocol}://${domain}`;

  // Base routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
    },
  ];

  // Blog category pages
  const blogCategoryRoutes = BLOG_CATEGORIES.map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: new Date(),
  }));

  // Blog post pages
  const blogPostRoutes = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  // Docs pages
  const docsRoutes = allDocsPosts.map((post) => ({
    url: `${baseUrl}/docs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    ...staticRoutes,
    ...blogCategoryRoutes,
    ...blogPostRoutes,
    ...docsRoutes,
  ];
}
