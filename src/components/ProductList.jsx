import { useRef, useState } from 'react';
import products from '../assets/data/products.json';
import { collect } from 'collect.js';
import Product from './Product';

function Products(){
    // Déclarer les états du composant
    const [search, setSearch] = useState('');
    const [page, setPage] = useState('');
    const [results, setResults] = useState([]);

    // Les réferences
    const refInputPrice = useRef(null);
    const refInputName = useRef(null);
    const refInputStock = useRef(null);
 
    // Copier les produits sous forme de collection de produit(s)
    const productsCopy = collect([...products]);

    console.log(productsCopy);

    // collect().macro('intlCollator', function intlCollator(lang, key) {
    //         return this.sort((a, b) => new Intl.Collator(lang).compare(a[key], b[key]));
    // });

    // const productsByName = productsCopy.intlCollator('fr', 'name').filter(p => p.stock > 0);// produits ordonné par le nom dont le stock est supérieur à zéro
    // const productsByPrice= productsCopy.sortBy('price').filter(p => p.stock > 0);
    // const productsByStock= productsCopy.sortBy('stock').filter(p => p.stock > 0); 

    // console.log('by name', productsByName);
    // console.log('by price', productsByPrice);
    // console.log('by stock', productsByStock);

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        // console.log(search)
        if(search.trim() !== ''){
            setResults(productsCopy.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) && p.stock > 0).all());
            console.log('resul', results.length)
        }
    }

    const handleSubmitFilter = (e) => {
        e.preventDefault();
        console.log(refInputPrice.current);

        if(refInputPrice.current.checked){
            console.log("input prix checked");
            setResults(collect(results).sortBy('price').filter(p => p.stock > 0))
        }

        if(refInputName.current.checked){
            console.log("input nom checked");
            setResults(collect(results).sortBy('name').filter(p => p.stock > 0));
        }

        if(refInputStock.current.checked){
            console.log("input stock checked");
            setResults(collect(results).sortBy('stock').filter(p => p.stock > 0));
        }

    }

    const handleChangeSearch = (e) => {
        if(e.target.value !== '' ){
            setSearch(e.target.value)
        }
    }

    return (
        <section>
            <h2>Exercice 2</h2>
            <p>Les produits</p>
            <form onSubmit={handleSubmitSearch} action="#" method='POST' className='bg-primary-subtle pb-4 rounded-3 m-auto d-flex justify-content-around align-items-end' style={{width: 400}}>
                <div>
                    <label htmlFor="q" className='me-2 form-label'>Chercher un produit</label>
                    <input onChange={handleChangeSearch} type="search" name="q" id="q" className='form-control-sm' />
                </div>
                <button className='btn btn-primary mt-4 mb-1 d-flex align-items-center' type="submit" style={{height: 30}}>Chercher</button>
            </form>
            {isEqual(results, []) ? '' : (<h4>{results?.length > 0 ? `${results?.length } résultats` : 'O résultat'}</h4>)}
            <form action="" method='POST' onSubmit={handleSubmitFilter}>
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
            <ul className='d-flex flex-column flex-wrap'>
                {results.map(p => {
                    return (
                    <li key={p.id}><Product id={p.id} name={p.name} price={p.price} stock={p.stock} category={p.category} />
                </li>
                )})}
            </ul>
            <ul className='d-flex gap-5'>
                {/* {(productsCopy.count())/10} */}
                <li className='rounded-5 text-center' style={{width: 20}}>1</li>
                <li className='rounded-5 text-center' style={{width: 20}}>2</li>
                <li className='rounded-5 text-center' style={{width: 20}}>3</li>
                <li className='rounded-5 text-center' style={{width: 20}}>4</li>
                <li className='rounded-5 text-center' style={{width: 20}}>5</li>
                <li className='rounded-5 bg-secondary text-center' style={{width: 20}}>6</li>
                <li className='rounded-5 text-center' style={{width: 20}}>7</li>
                <li className='rounded-5 text-center' style={{width: 20}}>8</li>
                <li className='rounded-5 text-center' style={{width: 20}}>9</li>
                <li className='rounded-5 text-center' style={{width: 20}}>10</li>
            </ul>
        </section>
    )
}

function isEqual(tableau1, tableau2) {
  if (tableau1.length !== tableau2.length) return false;

  return JSON.stringify(tableau1) === JSON.stringify(tableau2);
}

export default Products;