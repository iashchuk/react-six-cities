export const modifyComment = (data) => {
  return {
    id: data.id,
    user: {
      id: data.user.id,
      isPro: data.user.is_pro,
      name: data.user.name,
      avatarUrl: data.user.avatar_url
    },
    rating: data.rating,
    comment: data.comment,
    date: data.date
  };
};
