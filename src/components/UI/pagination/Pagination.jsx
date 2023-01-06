import React, {forwardRef} from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = forwardRef(({totalPages, page, changePage}, ref) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper" ref={ref}>
      {pagesArray.map((p) =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__count' : 'page'}
        >
            {p}
          </span>
      )}
    </div>
  );
});

export default Pagination;
