import { useState } from 'react';
import products from '../assets/data/products.json';
import { collect } from 'collect.js';

function Products(){
    // Déclarer les états du composant
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [page, setPage] = useState('');

    // Copier les produits sous forme de collection de produit(s)
    const productsCopy = collect([...products]);

    console.log(productsCopy);

    collect().macro('intlCollator', function intlCollator(lang, key) {
            return this.sort((a, b) => new Intl.Collator(lang).compare(a[key], b[key]));
    });

    const productsByName = productsCopy.intlCollator('fr', 'nom').filter(p => p.stock > 0);// produits dont le stock est supérieur à zéro
    const productsByPrice= productsCopy.sortBy('prix').filter(p => p.stock > 0);
    const productsByStock= productsCopy.sortBy('stock').filter(p => p.stock > 0); 

    console.log('by name', productsByName);
    console.log('by price', productsByPrice);
    console.log('by stock', productsByStock);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <section>
            <h2>Exercice 2</h2>
            <p>Les produits</p>
            <form onSubmit={handleSubmit} action="#" method='POST' className='bg-primary-subtle pb-4 rounded-3 m-auto d-flex justify-content-around align-items-end' style={{width: 400}}>
                <div>
                    <label htmlFor="q" className='me-2 form-label'>Chercher un produit</label>
                    <input type="search" name="q" id="q" className='form-control-sm' />
                </div>
                <button className='btn btn-primary mt-4 mb-1 d-flex align-items-center' type="submit" style={{height: 30}}>Chercher</button>
            </form>
            <div>
                <form action="">
                    <fieldset>
                    <legend>Veuillez filtrer vos résultats</legend>
                    <div>
                        <input type="checkbox" id="price" name="sortBy" value="price" />
                        <label htmlFor="price">prix</label>
                    </div>
                    <div>
                        <input type="checkbox" id="name" name="sortBy" value="name" />
                        <label htmlFor="name">nom</label>
                    </div>
                    <div>
                        <input type="checkbox" id="name" name="sortBy" value="stock" />
                        <label htmlFor="stock">stock</label>
                    </div>
                    </fieldset>                
                </form>
            </div>
            <ul>
                <li>Produit 1</li>
                <li>Produit 2</li>
                <li>Produit 3</li>
            </ul>
        </section>
    )
}

export default Products;