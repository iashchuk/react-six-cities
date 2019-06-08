export const parseOffers = (locations, hotels) => {
  return locations.map((city) => {
    return {
      city,
      offers: hotels
        .filter((hotel) => hotel.city.name === city)
        .map((item) => {
          return {
            id: item.id,
            city: item.city.name,
            title: item.title,
            type: item.type,
            location: item.location,
            isFavorite: item.is_favorite,
            isPremium: item.is_premium,
            image: item.preview_image,
            price: item.price,
            currency: `€`,
            rating: (item.rating / 5) * 100
          };
        })
    };
  });
};
