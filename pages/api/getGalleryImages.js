const getGalleryImages = async (filter) => {
  console.log('filter: ', filter);
  let url = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/gallery?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}&`;

  if (filter !== 'all') {
    url =
      url +
      `&filterByFormula=%7Bcategory%7D%20%3D%20%27${filter}%27%0A`;
  }

  console.log('url: ', url);

  // if (filter === 'popyachts-listing-2021') {
  //   urlFilter =
  //     '%7Bsubject%7D%20%3D%20%27popyachts-listing-2021%27%0A';
  //   url = url + urlFilter;
  //   console.log('url: ', url);
  // } else if (filter === "construction") {
  //   urlFilter=
  // }
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data.records)
    .catch((error) => console.log(error));
};

export default getGalleryImages;

//  `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/gallery?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}&${filter}`
