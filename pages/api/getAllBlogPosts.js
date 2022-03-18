const getAllBlogPosts = async (sortBy, sortDirection) => {
  let fetchUrl = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/posts?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;

  if (sortBy && sortDirection) {
    const sortBySuffix = `sort%5B0%5D%5Bfield%5D=${sortBy}`;
    const sortDescSuffix = `sort%5B0%5D%5Bdirection%5D=${sortDirection}`;
    fetchUrl = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/posts?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}&${sortBySuffix}&${sortDescSuffix}`;
  }

  return await fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => data.records)
    .catch((err) => console.log(err));
};

export default getAllBlogPosts;
