import "@/components/mypage/MypagePresentRecord.scss";
// import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from "react";
import { getGiftHistory } from "@/lib/api/mypageAPI";
import Text from "../common/Text";
import Pagination from "react-js-pagination";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { getTeamLogo } from "@/lib/util/TeamTagLogo";
import Image from "next/image";
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
    // setPageData(pageDummyData.data);

    const getHistory = async () => {
      const res = await getGiftHistory(page);
      setPageData(res.data);
    };
    getHistory();
  }, [page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const presentHeader = [" ", "닉네임", "토큰갯수", "한줄 메세지", "날짜"];

  const getHeaderClassname = (i: string) => {
    switch (i) {
      case " ": {
        return "contentbox--logo";
      }
      case "한줄 메세지": {
        return "contentbox--comment";
      }
      default: {
        return "contentbox";
      }
    }
  };
  return (
    <div className="present">
      {/* //TODO: 아이템 필터링
          <div className="present-filter">
            보낸 선물내역
            <div className="present-filter__icon">
              <GoArrowUp />
            </div>
          </div> */}
      {pageData && pageData.content.length > 0 ? (
        <>
          <table className="present-record">
            <thead>
              <tr className="present-record__title">
                {presentHeader.map((i) => (
                  <th key={i} className={getHeaderClassname(i)}>
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
                      <td className="contentbox--logo">
                        <Image
                          src={getTeamLogo(data.teamName)}
                          width={50}
                          height={50}
                          alt={`${data.teamName} 로고`}
                        />
                      </td>
                      <td className="contentbox">{data.nickname}</td>
                      <td className="contentbox">{data.token}</td>
                      <td className="contentbox--comment">{data.comment}</td>
                      <td className="contentbox">{data.takeDate}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Pagination
            activePage={pageData?.pageable?.pageNumber as number}
            totalItemsCount={pageData?.totalElements as number}
            itemsCountPerPage={15}
            onChange={handlePageChange}
            hideFirstLastPages={true}
            prevPageText={<MdNavigateBefore />}
            nextPageText={<MdNavigateNext />}
          />
        </>
      ) : (
        <div className="emptyTable">
          <Text large>아직 선물 내역이 없어!</Text>
        </div>
      )}
    </div>
  );
}

export default MypagePresentRecord;
