import "@/components/mypage/MypagePresentRecord.scss";
// import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from "react";
import { getGiftHistory } from "@/lib/api/mypageAPI";
import Text from "../common/Text";
import Pagination from "react-js-pagination";
interface ContentData {
  nickname: string;
  teamName: string;
  token: number;
  comment: string;
  takeDate: string;
}

interface GetPresentData {
  content: ContentData[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
  };
  size: number;
  sort: { sorted: boolean; empty: boolean; unsorted: boolean };
  totalElements: number;
  totalPages: number;
}

function MypagePresentRecord() {
  const [pageData, setPageData] = useState<GetPresentData>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getHistory = async () => {
      const res = await getGiftHistory(page);
      setPageData(res.data);
    };
    getHistory();
  }, [page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const presentHeader = ["닉네임", "토큰갯수", "한줄 메세지", "날짜"];

  return (
    <div className="present">
      {pageData && pageData.content.length > 0 ? (
        <>
          {/* //TODO: 아이템 필터링
          <div className="present-filter">
            보낸 선물내역
            <div className="present-filter__icon">
              <GoArrowUp />
            </div>
          </div> */}
          <table className="present-record">
            <thead>
              <tr className="present-record__title">
                {presentHeader.map((i) => (
                  <th key={i} className="contentbox">
                    {i}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageData &&
                pageData.content.map((data, i) => {
                  return (
                    <tr
                      key={data.takeDate + data.comment}
                      className={`present-record__content ${
                        i % 2 === 0 && "present-record__content--deco"
                      }`}
                    >
                      <td className="contentbox">{data.nickname}</td>
                      <td className="contentbox">{data.token}</td>
                      <td className="contentbox">{data.comment}</td>
                      <td className="contentbox">{data.takeDate}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Pagination
            activePage={pageData.totalPages}
            itemsCountPerPage={10}
            totalItemsCount={10}
            pageRangeDisplayed={
              pageData.totalPages < 5 ? pageData.totalPages : 5
            }
            onChange={handlePageChange}
          />
        </>
      ) : (
        <>
          <Text large>내역이 존재하지 않아!ㅠㅠ</Text>
        </>
      )}
    </div>
  );
}

export default MypagePresentRecord;
