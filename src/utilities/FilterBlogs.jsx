export const filterBlogsByCat = (blogs, category) => {
  if (!Array.isArray(blogs)) {
    return [];
  }

  const filtered = blogs.filter((blog) => blog.category === category);
  return filtered;
};

export const filterRelatedBlogs = (relatedBlogs, titleSlug) => {
  if (!Array.isArray(relatedBlogs)) {
    return [];
  }

  const filteredBlogs = relatedBlogs
    .filter((blog) => blog.title_slug !== titleSlug)
    .slice(0, 2);
  return filteredBlogs;
};
