var Airtable = require('airtable');
var base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_SEA_LOG);

const allTrips = () =>{};

export default allTrips;

// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
// base('sail-log').select({
//     view: 'Grid view'
// }).firstPage(function(err, records) {
//     if (err) { console.error(err); return; }
//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('trip'));
//     });
// });
