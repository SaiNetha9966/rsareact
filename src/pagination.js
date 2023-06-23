import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Paginate({ pageCount, handlePageClick }) {
  return (
    <div>
      <div>
        <div className="mb-5 justify-content-end">
          <ReactPaginate
            nextLabel=" >>>"
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<<<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination  mb-0 d-flex flex-row justify-content-end"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Paginate;

//input filed not allow above 1000000 in react
