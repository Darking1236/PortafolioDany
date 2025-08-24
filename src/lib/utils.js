function lastFilterPosts(posts) {
  return posts
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .slice(posts.length - 3, posts.length);
}

export { lastFilterPosts };
