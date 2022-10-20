import React from 'react';
import { IPaginationProps } from './enhance-table';

const Pagination: React.FC<IPaginationProps> = (props) => {
  const {
    dataForPagination,
    isPrevDisabled,
    prevHandler,
    currentPage,
    dynamicPageCount,
    currentPageHandler,
    isNextDisabled,
    nextHandler,
  } = props;

  return dataForPagination.length ? (
    <nav aria-label="Page navigation example">
      <ul className="astm-pagination pagination">
        <li className={`page-item ${isPrevDisabled ? 'disabled' : ''}`} onClick={prevHandler}>
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        {dataForPagination.map((item: number, i) => {
          const isActive = item + 1 === currentPage;
          if (item + 1 >= dynamicPageCount - 2 && item + 1 <= dynamicPageCount) {
            return (
              <li
                key={i}
                className={`page-item ${isActive ? 'active' : ''}`}
                onClick={() => currentPageHandler(item + 1)}>
                <a className="page-link" href="#">
                  {item + 1}
                </a>
              </li>
            );
          } else {
            return <></>;
          }
        })}
        <li className={`page-item ${isNextDisabled ? 'disabled' : ''}`} onClick={nextHandler}>
          <a tabIndex={-1} className="page-link" aria-disabled="true" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  ) : (
    <></>
  );
};

export default Pagination;
