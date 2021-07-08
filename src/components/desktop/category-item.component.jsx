import React from 'react';

const CategoryItemDesktop = (label, className, onClick) => {

    return (
        <div
            className={`category-item text-base font-medium py-3 px-6 ${className}`}
            id={label}
            onClick={() => onClick()}
        >
            {label}
        </div>
    )

}

export default CategoryItemDesktop;
