export const parseComments = (data) => {
  return data.map((comment) => {
    return {
      ...comment,
      user: {
        id: comment.user.id,
        isPro: comment.user.is_pro,
        name: comment.user.name,
        avatarUrl: comment.user.avatar_url
      }
    };
  });
};
