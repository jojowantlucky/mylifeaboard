const getAllBlogPosts = async () => {
  return await fetch(
    `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/blog-posts?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data.records)
    .catch((err) => console.log(err));
};

export default getAllBlogPosts;
