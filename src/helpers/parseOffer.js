export const parseOffer = (id, hotels) => {
  const offer = hotels.find((item) => item.id === Number(id));

  console.log(offer);

  const modifiedOffer = {
    ...offer,
    city: offer.city.name,
    cityLocation: offer.city.location,
    image: offer.preview_image,
    isPremium: offer.is_premium,
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
