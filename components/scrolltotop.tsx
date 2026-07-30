'use client'
import React from "react";

export default function ScrollToTop() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className="scroll-to-top"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
        >
            <i className="bi bi-arrow-up"></i>
        </button>
    );
}