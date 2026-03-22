import collect from "collect.js";
import { memo } from "react";

function Pages({results, choicePage, currentPage}){
    const resultsPerPage = 10;

    console.log('résultats paginés', results);
    
    const handleClick = (e) => {
        console.log("page", e.target.textContent);
        console.log('pagination page', e.target.textContent, collect(results).forPage((e.target.textContent)*1, 10));
        choicePage((e.target.textContent)*1);
    }

    return (
            <ul className='d-flex justify-content-center gap-5 mt-5'>
                {Array.from(
                    { length: Math.ceil(collect(results).count() / resultsPerPage) }, 
                        (_, i) => i + 1).map((pageNumber) => (
                            <li
                                key={pageNumber}
                                style={{ width: 20 }}
                                onClick={handleClick}

                            >
                            <p 
                                className={`rounded-5 text-center ${pageNumber === currentPage ? 'bg-secondary text-white pb-2 pt-2 ps-3 pe-4 text-center position-relative' : ''}`}
                                style={
                                    {
                                        top:-8,
                                        cursor: 'pointer'
                                    }
                                }
                                >{pageNumber}
                            </p>
                            </li>
                    ))}
            </ul>   
    )
}

export default memo(Pages);