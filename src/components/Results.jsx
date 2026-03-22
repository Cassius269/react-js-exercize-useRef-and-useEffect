import { collect } from "collect.js";
import Product from "./Product";
import { memo, useMemo } from "react";

function Results({results, page}){
    console.log('resultats', results);

    // Utiliser useMemo pour mettre en cache le jsx rendu
    const allPaginatedResults = useMemo(() => collect(results).forPage(page, 10).map(p => {
                    return (
                        <li 
                            className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" 
                            key={p.id}><Product 
                            id={p.id} 
                            name={p.name} 
                            price={p.price} 
                            stock={p.stock} 
                            category={p.category} />
                        </li>
                )}),[results, page]);
            
    return (
            <ul className='row m-auto'>
                { allPaginatedResults }
        </ul>    
    )
}

export default memo(Results);