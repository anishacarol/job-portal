import React from "react";
import * as Styled from "./Pagination.styled";

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <>
      {currentPage > 0 && (
        <Styled.Link
          to={{
            pathname: `/job-list`,
            search: `?page=${+currentPage - 1}`
          }}
        >
          Prev
        </Styled.Link>
      )}

      {currentPage < totalPages && (
        <Styled.Link
          to={{
            pathname: `/job-list`,
            search: `?page=${+currentPage + 1}`
          }}
        >
          Next
        </Styled.Link>
      )}
    </>
  );
};

export default React.memo(Pagination);
