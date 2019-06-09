export const modifyOffer = (offer) => {
  return {
    ...offer,
    id: offer.id,
    city: offer.city.name,
    title: offer.title,
    type: offer.type,
    location: offer.location,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    image: offer.preview_image,
    price: offer.price,
    currency: `€`,
    rating: (offer.rating / 5) * 100
  };
};
