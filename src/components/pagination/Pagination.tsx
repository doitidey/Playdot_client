"use client";

import "@/components/pagination/Pagination.scss";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface PaginationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

function Pagination({ onPrevClick, onNextClick }: PaginationProps) {
  return (
    <section className="pagination-block">
      <div className="pagination-list">
        <button className="pagination-list__prev-next" onClick={onPrevClick}>
          <MdArrowBackIos />
        </button>
        <button className={`pagination-list__item page-active`}>1</button>
        {/* <button className={`pagination-list__item `}>2</button> */}
        <button className="pagination-list__prev-next" onClick={onNextClick}>
          <MdArrowForwardIos />
        </button>
      </div>
    </section>
  );
}

export default Pagination;
