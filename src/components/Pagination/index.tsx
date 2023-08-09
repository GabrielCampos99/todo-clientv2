/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

type PaginationProps = {
  totalPages: number;
};
const Pagination = (props: PaginationProps) => {
  const pageNumberLimit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const { totalPages } = props;

  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageLimit(maxPageLimit - pageNumberLimit);
        setMinPageLimit(minPageLimit - pageNumberLimit);
      }
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      if (currentPage + 1 > maxPageLimit) {
        setMaxPageLimit(maxPageLimit + pageNumberLimit);
        setMinPageLimit(minPageLimit + pageNumberLimit);
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setCurrentPage(Number(e.currentTarget.id));
  };

  // page ellipses
  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = (
      <li className="text-white" onClick={handleNextClick}>
        &hellip;
      </li>
    );
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <li className="text-white" onClick={handlePrevClick}>
        &hellip;
      </li>
    );
  }

  const pageNumbers = pages.map((page) => {
    const activePage = currentPage === page;
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={`${page}`}
          onClick={(e) => handlePageClick(e)}
          className={`text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 py-1 px-3 cursor-pointer ${
            activePage ? 'text-white bg-indigo-600 hover:bg-indigo-600' : ''
          }`}
        >
          {page}
        </li>
      );
    }
    return null;
  });

  return (
    <nav aria-label="Page navigation">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={handlePrevClick}
            className="flex items-center justify-center text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 p-2"
          >
            Anterior
          </button>
        </li>
        {pageDecremenEllipses}
        {pageNumbers}
        {pageIncrementEllipses}
        <li>
          <button
            onClick={handleNextClick}
            className="flex items-center justify-center text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100 p-2"
          >
            Proximo
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
