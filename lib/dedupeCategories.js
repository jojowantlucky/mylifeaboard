const dedupeCategories = (allTransactions) => {
  const categoryList = allTransactions.map((item) => {
    return item.fields.categories;
  });
  return [...new Set(categoryList)];
};
export default dedupeCategories;

// return array of strings
// ['propulsion', 'deck', 'deck, navigation', 'applicances', 'planning', 'electrical, navigation, planning', 'adventures', 'gadegry, navigation, interior', 'interior, planning', 'navigation, deck, propulsion', 'hull']
