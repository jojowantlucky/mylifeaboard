const getAllTransactions = async () => {
  let url = `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/costs?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`;

 
     return await fetch(url)
      .then((res) => res.json())
      .then((data) => data.records)
      .catch((err) => console.log(err));

};

export default getAllTransactions;
