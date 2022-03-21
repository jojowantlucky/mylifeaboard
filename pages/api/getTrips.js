import React from 'react';

const getTrips = async () => {
  return await fetch(
    'https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/tblEkmkWXwi46pg3p?fields%5B%5D=trip'
  )
    .then((data) => data.json())
    .then((data) => data.response)
    .catch((err = console.log(err)));
};

export default getTrips;
