import { useRef } from "react";

function FilterProducts({filter}){
        // Les réferences
        const refInputPrice = useRef(null);
        const refInputName = useRef(null);
        const refInputStock = useRef(null);


        const handleSubmitFilter = (e) => {
        e.preventDefault();


        if(refInputPrice.current.checked){
            console.log("input prix checked");
            filter('price')
        }

        if(refInputName.current.checked){
            console.log("input name checked");
            filter('name')
        }

        if(refInputStock.current.checked){
            console.log("input stock checked");
            filter('stock')
        }

    }

    return (
                <form action="" method='POST' onSubmit={handleSubmitFilter} className="mb-5">
                <fieldset>
                    <legend>Filtre des résultats</legend>
                    <div>
                        <input ref={refInputPrice} type="checkbox" id="price" name="sortBy" value="price" />
                        <label htmlFor="price">prix</label>
                    </div>
                    <div>
                        <input ref={refInputName} type="checkbox" id="name" name="sortBy" value="name" />
                        <label htmlFor="name">nom</label>
                    </div>
                    <div>
                        <input ref={refInputStock} type="checkbox" id="name" name="sortBy" value="stock" />
                        <label htmlFor="stock">stock</label>
                    </div>
                </fieldset>      
                <button className='btn btn-primary' type="submit">Filtre</button>          
            </form>
    )
}

export default FilterProducts;