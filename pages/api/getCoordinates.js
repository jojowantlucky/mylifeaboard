const getCoordinates = async () => {
  return await fetch(
    `https://api.airtable.com/v0/appgzYrTBQ3bcGlF0/sail-log?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
  )
    .then((data) => data.json())
    .then((data) => data.records);
};

export default getCoordinates;

/*
const homePortCoordinates = [
    45.60514012056267, -122.65578868429517,
  ];

  const theCliffCoordinates = [
    12.920836911295423, 100.86285125163124,
  ];

  const [rawGpsData, setRawGpsData] = useState([
    {
      trip: 'Default useState',
      latLon: homePortCoordinates,
      timestamp: new Date(),
    },
  ]);
*/
