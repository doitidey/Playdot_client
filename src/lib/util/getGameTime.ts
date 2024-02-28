export const gameDate = (data: string) => {
  const rDataFormat = /[12][0-9]{3}-[0-9]{2}-[0-9]{2}/;
  if (data.search(rDataFormat) === -1) {
    return data;
  }
  const year = data.substring(0, 4);
  const month = data.substring(5, 7);
  const day = data.substring(10, 8);
  const time = data.substring(11, 16);
  return `${year}년 ${month}월 ${day}일 ${time}`;
};

export const commentDate = (createdAt: string | undefined) => {
  const postDate = createdAt;
  const year = postDate?.substring(0, 4);
  const month = postDate?.substring(5, 7);
  const day = postDate?.substring(10, 8);

  return `${year}.${month}.${day}`;
};
