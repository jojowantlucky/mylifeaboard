const dedupeCostCategories = (transactions) => {
  const categoryList = transactions.map((item) => {
    return item.fields.category;
  });
  return [...new Set(categoryList)];
};
export default dedupeCostCategories;
