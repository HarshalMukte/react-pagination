import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, nextPage, prevPage } = useGlobalContext();

  return (
    <div className="pagination">
      <button
        className="btn btn-pre"
        disabled={page === 0 && "disabled"}
        onClick={() => prevPage()}
      >
        Prev
      </button>
      <div className="page">
        <span>{nbPages === 0 ? 0 : page + 1}</span>
        <span>of</span>
        <span>{nbPages}</span>
      </div>
      <button
        className="btn btn-next"
        disabled={page + 1 >= nbPages && "disabled"}
        onClick={() => nextPage()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
