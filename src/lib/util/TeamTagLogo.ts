import { TeamImg, TeamImgHref } from "./getLogo";

export interface TeamColor extends TeamImg {}

export const TeamColor: TeamColor = {
  lions: "lions",
  tigers: "tigers",
  twins: "twins",
  bears: "bears",
  landers: "landers",
  wiz: "wiz",
  giants: "giants",
  dinos: "dinos",
  eagles: "eagles",
  heroes: "heroes",
};

export const getTeamLogo = (data: string) => {
  switch (data) {
    case "LG 트윈스": {
      return TeamImgHref.twins;
    }
    case "삼성 라이온즈": {
      return TeamImgHref.lions;
    }
    case "한화 이글스": {
      return TeamImgHref.eagles;
    }
    case "KIA 타이거즈": {
      return TeamImgHref.tigers;
    }
    case "키움 히어로즈": {
      return TeamImgHref.heroes;
    }
    case "롯데 자이언츠": {
      return TeamImgHref.giants;
    }
    case "SSG 랜더스": {
      return TeamImgHref.landers;
    }
    case "두산 베어스": {
      return TeamImgHref.bears;
    }
    case "KT 위즈": {
      return TeamImgHref.wiz;
    }
    case "NC 다이노스": {
      return TeamImgHref.dinos;
    }
  }
  return data;
};

export const getTeamColor = (data: string) => {
  switch (data) {
    case "LG 트윈스": {
      return TeamColor.twins;
    }
    case "삼성 라이온즈": {
      return TeamColor.lions;
    }
    case "한화 이글스": {
      return TeamColor.eagles;
    }
    case "KIA 타이거즈": {
      return TeamColor.tigers;
    }
    case "키움 히어로즈": {
      return TeamColor.heroes;
    }
    case "롯데 자이언츠": {
      return TeamColor.giants;
    }
    case "SSG 랜더스": {
      return TeamColor.landers;
    }
    case "두산 베어스": {
      return TeamColor.bears;
    }
    case "KT 위즈": {
      return TeamColor.wiz;
    }
    case "NC 다이노스": {
      return TeamColor.dinos;
    }
  }
  return data;
};
