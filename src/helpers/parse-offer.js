export const parseOffer = (id, hotels) => {
  const offer = hotels.find((item) => item.id === Number(id));

  const modifiedOffer = {
    ...offer,
    city: offer.city.name,
    cityLocation: offer.city.location,
    image: offer.preview_image,
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    maxAdults: offer.max_adults,
    host: {
      id: offer.host.id,
      name: offer.host.name,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro
    }
  };

  return modifiedOffer;
};
