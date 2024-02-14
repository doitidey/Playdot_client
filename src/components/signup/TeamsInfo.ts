type TeamInfo = Array<{
  img: string;
  name: string;
  color: string;
}>;

export const TEAMS_INFO: TeamInfo = [
  { img: "/images/tigers.svg", name: "기아 타이거즈", color: "tigers" },
  { img: "/images/lions.svg", name: "삼성 라이온즈", color: "lions" },
  { img: "/images/twins.svg", name: "LG 트윈스", color: "twins" },
  { img: "/images/bears.svg", name: "두산 베어스", color: "bears" },
  {
    img: "/images/giants.svg",
    name: "롯데 자이언츠",
    color: "giants",
  },
  {
    img: "/images/dinos.svg",
    name: "NC 다이노스",
    color: "dinos",
  },
  {
    img: "/images/landers.svg",
    name: "SSG 랜더스",
    color: "landers",
  },
  {
    img: "/images/wiz.svg",
    name: "KT 위즈",
    color: "wiz",
  },
  {
    img: "/images/eagles.svg",
    name: "한화 이글스",
    color: "eagles",
  },
  {
    img: "/images/heroes.svg",
    name: "키움 히어로즈",
    color: "heroes",
  },
];

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
const TEAMIMG_HREF: TeamImg = {
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

export const getLogo = (name: string) => {
  switch (name) {
    case "LG 트윈스": {
      return TEAMIMG_HREF.twins;
    }
    case "삼성 라이온즈": {
      return TEAMIMG_HREF.lions;
    }
    case "한화 이글스": {
      return TEAMIMG_HREF.eagles;
    }
    case "KIA 타이거즈": {
      return TEAMIMG_HREF.tigers;
    }
    case "키움 히어로즈": {
      return TEAMIMG_HREF.heroes;
    }
    case "롯데 자이언츠": {
      return TEAMIMG_HREF.gients;
    }
    case "SSG 랜더스": {
      return TEAMIMG_HREF.landers;
    }
    case "두산 베어스": {
      return TEAMIMG_HREF.bears;
    }
    case "KT 위즈": {
      return TEAMIMG_HREF.wiz;
    }
    case "NC 다이노스": {
      return TEAMIMG_HREF.dinos;
    }
    default: {
      return TEAMIMG_HREF.twins;
    }
  }
};

export const getClassName = (name: string) => {
  switch (name) {
    case "LG 트윈스": {
      return "twins";
    }
    case "삼성 라이온즈": {
      return "lions";
    }
    case "한화 이글스": {
      return "eagles";
    }
    case "KIA 타이거즈": {
      return "tigers";
    }
    case "키움 히어로즈": {
      return "heroes";
    }
    case "롯데 자이언츠": {
      return "giants";
    }
    case "SSG 랜더스": {
      return "landers";
    }
    case "두산 베어스": {
      return "bears";
    }
    case "KT 위즈": {
      return "wiz";
    }
    case "NC 다이노스": {
      return "dinos";
    }
    default: {
      return "twins";
    }
  }
};
