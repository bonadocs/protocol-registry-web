import React, { useState } from "react";

interface PaginationProps {
  totalItems?: number;
  itemsPerPage?: number;
  page?: number;
  onPageChange: (pageNumber: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  page,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(page || 1);

  if (!totalItems) return null;
  if (!itemsPerPage) return null;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={[
            i === currentPage
              ? "bonadocs__search__registry__content__pagination__item__active"
              : "",
            "bonadocs__search__registry__content__pagination__item",
          ].join(" ")}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return <ul className={className}>{renderPageNumbers()}</ul>;
};
