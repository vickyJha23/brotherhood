import React from 'react'
import { ChevronsUp, Star } from 'lucide-react';

const ScrollToTopButton = ({moveToTop}) => {
    return (
        <button
            className='fixed bottom-18 right-2 bg-pink-500 text-white p-1 rounded-full shadow-md hover:bg-gray-700 transition-colors'
            onClick={moveToTop}
        >
            <ChevronsUp size={20} />
        </button>
    )
}

export default ScrollToTopButton
