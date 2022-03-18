const dedupeCategories = (allTransactions) => {
  const categoryList = allTransactions.map((item) => {
    // console.log('item: ', item);
    if (item.fields.categories.includes(',')) {
      // split up the string into an array of stings.
      // console.log(
      //   'inside comma: ',
      //   item.fields.categories.split(',')
      // );

      return item.fields.categories.split(',');
    }

    return item.fields.categories;
  });
  // console.log([...new Set(categoryList)]);
  return [...new Set(categoryList)];
};
export default dedupeCategories;

// return array of strings
// ['propulsion', 'deck', 'deck, navigation', 'applicances', 'planning', 'electrical, navigation, planning', 'adventures', 'gadegry, navigation, interior', 'interior, planning', 'navigation, deck, propulsion', 'hull']
