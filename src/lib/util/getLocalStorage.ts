export const getLocalNickname =
  typeof window !== "undefined" && localStorage.getItem("nickname");

export const getLocalToken =
  typeof window !== "undefined" && localStorage.getItem("authToken");

export const getLocalTeamName =
  typeof window !== "undefined" && localStorage.getItem("teamName");

export const getLocalProfileImage =
  typeof window !== "undefined" && localStorage.getItem("profileImageUrl");
