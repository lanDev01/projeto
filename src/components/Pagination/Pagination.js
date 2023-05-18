import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-3">
      <ul className="pagination justify-content-center grid gap-3 ">
        {prev ? (
          <li className="page-item">
            <button className=" btn btn-outline-info" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item ">
            <button className="btn btn-outline-info" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
