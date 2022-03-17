const addCategoryCosts = (transactions) => {
  const tempCosts = {};
  const costsByCategory = [];
  const categories = [];
  const costs = [];
  const formatSubtotal = (string) => {
    return Number(string.replace(/\$|,/g, ''));
  };
  const formatCategory = (category) => {
    return category.replace(/ /g, '-').trim();
  };

  transactions.forEach((transaction) => {
    const subtotal = formatSubtotal(
      transaction.fields.subtotal
    );

    const category = formatCategory(
      transaction.fields.category
    );

    if (tempCosts.hasOwnProperty(category)) {
      tempCosts[category] = tempCosts[category] + subtotal;
    } else {
      tempCosts[category] = subtotal;
    }
  });

  for (let prop in tempCosts) {
    categories.push(prop);
    costs.push(tempCosts[prop]);
  }
  return [categories, costs];
};

export default addCategoryCosts;
