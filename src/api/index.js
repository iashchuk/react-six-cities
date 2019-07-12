export const request = {
  get: {
    login() {
      return `/login`;
    },
    hotels() {
      return `/hotels`;
    },
    favorite() {
      return `/favorite`;
    },
    comments(hotelId) {
      return `/comments/${hotelId}`;
    }
  },
  post: {
    login() {
      return `/login`;
    },
    favorite(hotelId, status) {
      return `/favorite/${hotelId}/${status}`;
    },
    comments(hotelId) {
      return `/comments/${hotelId}`;
    }
  }
};
