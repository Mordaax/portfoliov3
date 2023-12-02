import { allPosts } from 'contentlayer/generated';

const Sitemap = () => {
  const posts = allPosts.map((post) => ({
    url: `https://cyrustrx.com${post.slug}`,
    lastModified: post.published,
  }));

  const routes = ['', '/about', '/writing'].map(
    (route) => ({
      url: `https://cyrustrx.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...posts];
}

export default Sitemap
