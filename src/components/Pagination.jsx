import React, { useState } from 'react';
import Pagination from 'react-responsive-pagination';
import './pagination.css'; // see pagination.css examples below

export default function MyApp() {
    const totalPages = 120;
    const [currentPage, setCurrentPage] = useState(1);

    function handlePageChange(page) {
        setCurrentPage(page);
        // ... do something with `page`
    }

    return (
        <Pagination
            total={totalPages}
            current={currentPage}
            onPageChange={page => handlePageChange(page)}
        />
    );
}