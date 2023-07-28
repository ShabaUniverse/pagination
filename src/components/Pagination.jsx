import React from "react";

const Pagination = ({ quantityOfPages, setCurrentPage }) => {

  // variables to push quantity of pages
  const pages = [];

  // assing values to pages variable
  for (let i = 1; i <= quantityOfPages; i++) {
    pages.push(i);                              // array [1,2,3,4]
  }

  // on click on number, it sets that number as number of page
  const changePage = (number) => {
    setCurrentPage(number)
  }

  return (
    // break pages array into pieces
    <div className="pagination flex justify-center items-center my-5">
      {pages.map((item, i) => (
        <p
          className="text-lg text-white mx-1 w-6 text-center bg-blue-500 cursor-pointer"
          key={i}
          onClick={() => changePage(item)}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
