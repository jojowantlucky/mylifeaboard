const addCategoryCosts = (transactions) => {
  console.log('transactions: ', transactions);
  const temp = {};
  const costsByCategory = [];
  const formatSubtotal = (string) => {
    return parseFloat(string.replace(/\$|,/g, ''));
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
    console.log(category);
    console.log(temp);

    if (temp.hasOwnProperty(category)) {
      temp[category] = temp[category] + subtotal;
    } else {
      temp[category] = subtotal;
    }
    for (let prop in temp) {
      costsByCategory.push({
        category: prop,
        cost: temp[prop],
      });
    }
  });

  return costsByCategory;
};

export default addCategoryCosts;
