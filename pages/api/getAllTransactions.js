import { useState } from 'react';

const getAllTransactions = () => {
  const costs = [];
  fetch(
    `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/costs?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.records.length; i++) {
        costs.push(data.records[i]);
      }
    })
    .catch((err) => console.log(err));

  return costs;
};

export default getAllTransactions;
