const getAllBlogPosts = async (sortBy, sortDirection) => {
  // This gets all posts with dates before or on TODAY().
  // Airtable filter function must be URL encoded. See: https://www.urlencoder.org/
  // https://airtable.com/appgzYrTBQ3bcGlF0/api/docs#curl/table:posts

  const dateFilter = `filterByFormula=OR%28IS_SAME%28%7Bdate%7D%2C%20TODAY%28%29%29%2C%20IS_BEFORE%28%7Bdate%7D%2C%20TODAY%28%29%29%29`;

  let fetchUrl = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/posts?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}&${dateFilter}`;

  if (sortBy && sortDirection) {
    const sortBySuffix = `sort%5B0%5D%5Bfield%5D=${sortBy}`;
    const sortDescSuffix = `sort%5B0%5D%5Bdirection%5D=${sortDirection}`;
    fetchUrl = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/posts?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}&${dateFilter}&${sortBySuffix}&${sortDescSuffix}`;
  }

  return await fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => data.records)
    .catch((err) => console.log(err));
};

export default getAllBlogPosts;
