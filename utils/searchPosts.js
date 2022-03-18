const searchPosts = (allPosts, searchQuery) => {
  const searchResults = allPosts.filter(
    (post) =>
      post.fields.url.includes(searchQuery) ||
      post.fields.headline.includes(searchQuery) ||
      post.fields.thumbnailAltText.includes(searchQuery) ||
      post.fields.mainImgAltText.includes(searchQuery) ||
      post.fields.img2AltText.includes(searchQuery) ||
      post.fields.img3AltText.includes(searchQuery) ||
      post.fields.byline.includes(searchQuery) ||
      post.fields.abstract.includes(searchQuery) ||
      post.fields.paragraph1.includes(searchQuery) ||
      post.fields.paragraph2.includes(searchQuery) ||
      post.fields.paragraph3.includes(searchQuery) ||
      post.fields.paragraph4.includes(searchQuery) ||
      post.fields.testimonial.includes(searchQuery) ||
      post.fields.categories.includes(searchQuery) ||
      post.fields.author.includes(searchQuery) ||
      post.fields.date.includes(searchQuery)
  );
};

export default searchPosts;
