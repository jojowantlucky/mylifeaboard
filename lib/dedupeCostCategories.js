const dedupeCategories = (allTransactions) => {
  const categoryList = allTransactions.map((item) => {
    return item.fields.category;
  });
  return [...new Set(categoryList)];
};
export default dedupeCategories;
