export const parseCities = (hotels) => {
  return [...new Set(hotels.map((item) => item.city.name))];
};
