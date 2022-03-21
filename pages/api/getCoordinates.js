const getCoordinates = async (tripName) => {
  const apiKey = `api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;
  const baseUrl = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/tblEkmkWXwi46pg3p?sort%5B0%5D%5Bfield%5D=timestamp&sort%5B0%5D%5Bdirection%5D=asc`;
  let filter;
  let url;

  if (tripName.length < 1) {
    filter = '&maxRecords=1';
  } else {
    filter = `&filterByFormula=%7Btrip%7D%3D%22${tripName}%22`;
  }

  url = baseUrl + '&' + apiKey + '&' + filter;

  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data.records)
    .catch((err) => console.log(err));
};
export default getCoordinates;
