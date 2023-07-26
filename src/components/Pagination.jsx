import React from "react";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex justify-center items-center my-8">
      {pageNumbers.map((number) => (
        <p
          key={number}
          className="mx-1 font-semibold border border-blue-500 p-1 text-blue-500 cursor-pointer hover:bg-slate-300"
          onClick={() => paginate(number)}>
          {number}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
