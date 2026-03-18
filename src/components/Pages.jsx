import collect from "collect.js";

function Pages({results, choicePage, currentPage}){
    console.log('résultats paginés', results);
    
    const handleClick = (e) => {
        console.log("page", e.target.textContent);
        console.log('pagination', collect(results).forPage((e.target.textContent)*1, 10));
        choicePage((e.target.textContent)*1);
    }

    return (
            <ul className='d-flex gap-5'>
                {Array.from(
                    { length: Math.ceil(collect(results).count() / 10) }, 
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

export default Pages;