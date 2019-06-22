export const sortByDate = (itemA, itemB) =>
  new Date(itemB.date) - new Date(itemA.date);
