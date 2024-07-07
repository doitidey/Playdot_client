export const setAccessTokenToCookie = (accessToken: string) => {
  if (typeof window !== "undefined" && document) {
    document.cookie = `accessToken=${accessToken}; path=/`;
  }
};

export const getAccessTokenCookie = () => {
  if (typeof window === "undefined" || !document) {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.split("=")[0] === "accessToken");
  return cookie ? cookie.split("=")[1] : null;
};

export const deleteAccessTokenCookie = () => {
  if (typeof window !== "undefined" && document) {
    const date = new Date();
    const expires = `expires=${date.toUTCString()}.`;
    const expiresCookie = `accessToken=; ${expires}; path=/`;
    document.cookie = expiresCookie;
  }
};

export const setRefreshTokenToCookie = (refreshToken: string) => {
  if (typeof window !== "undefined" || !document) {
    document.cookie = `refreshToken=${refreshToken}; path=/`;
  }
};
