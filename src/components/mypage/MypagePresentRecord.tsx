import "@/components/mypage/MypagePresentRecord.scss";
import { presentData, presentHeader } from "./presentDummy";
import { GoArrowUp } from "react-icons/go";

function MypagePresentRecord() {
  return (
    <div className="present">
      <div className="present-filter">
        보낸 선물내역
        <div className="present-filter__icon">
          <GoArrowUp />
        </div>
      </div>
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
          {presentData.map((data, i) => {
            return (
              <tr
                key={i}
                className={`present-record__content ${
                  i % 2 === 0 && "present-record__content--deco"
                }`}
              >
                <td className="contentbox">{data.nickname}</td>
                <td className="contentbox">{data.token}</td>
                <td className="contentbox">{data.message}</td>
                <td className="contentbox">{data.takeDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination__content">&lt;</button>
        <button className="pagination__content pagination__content--active">
          1
        </button>
        <button className="pagination__content">2</button>
        <button className="pagination__content">3</button>
        <button className="pagination__content">4</button>
        <button className="pagination__content">5</button>
        <button className="pagination__content">6</button>
        <button className="pagination__content">7</button>
        <button className="pagination__content">8</button>
        <button className="pagination__content">9</button>
        <button className="pagination__content">10</button>
        <button className="pagination__content">&gt;</button>
      </div>
    </div>
  );
}

export default MypagePresentRecord;
