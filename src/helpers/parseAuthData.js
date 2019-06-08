export const parseAuthData = (data) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    email: data.email,
    name: data.name,
    avatarUrl: data.avatar_url,
    isPro: data.is_pro
  };
};
