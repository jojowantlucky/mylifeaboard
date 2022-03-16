import getTrips from './dummyGetTrips';

const getTripCoordinates = () => {
  // load in data from airtable.
  const allTrips = getTrips();
  console.log(allTrips);
  // filter db by trip id
  // filter out by trip id
  // create array of object:
  //  [
  //    {
  //      tripId: string[],
  //      coodinates: string[],
  //      date: type date,
  //      imgUrl: '#',
  //     }
  //  ]
  return tripId;
};

export default getTripCoordinates;
