// Interface
interface TeamImg {
  lions: string;
  twins: string;
  landers: string;
  bears: string;
  tigers: string;
  eagles: string;
  heroes: string;
  gients: string;
  wiz: string;
  dinos: string;
}

// Constants
const TeamImgHref: TeamImg = {
  lions: "/images/lions.svg",
  tigers: "/images/tigers.svg",
  twins: "/images/twins.svg",
  bears: "/images/bears.svg",
  gients: "/images/giants.svg",
  dinos: "/images/dinos.svg",
  landers: "/images/landers.svg",
  wiz: "/images/wiz.svg",
  eagles: "/images/eagles.svg",
  heroes: "/images/heroes.svg",
};

export const getHomeLogo = (data: string) => {
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
      return TeamImgHref.gients;
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

export const getAwayLogo = (data: string) => {
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
      return TeamImgHref.gients;
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