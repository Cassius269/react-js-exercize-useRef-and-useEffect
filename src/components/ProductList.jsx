import { useCallback, useReducer } from 'react';
import products from '../assets/data/products.json';
import { collect } from 'collect.js';
import Results from './Results';
import Pages from './Pages';
import FilterProducts from './FilterProducts';
import productReducer from '../reducers/productReducer';
import FormSearchProduct from './FormSearchProduct';

function Products(){
    // Gestion du reducer
    const [state, dispatch] = useReducer(productReducer, 
       { 
        q: '',
        results: collect([]), 
        filter: '',
        products:  collect([...products]),
        page: 1 // par défaut page 1
    }
    );  


    // Définir les actions du reducer : search avec argument le produit à chercher, filter avec argument le type de filtre
    const search = useCallback((q) => {
        dispatch(
            {
                type: 'SEARCH',
                q // terme de produit à chercher
            }
        )
    }, []);

    const filter = useCallback( (typeFilter) => {
        dispatch(
            {
                type: `FILTER_${typeFilter.toUpperCase()}`,
            }
        )
    }, [])

    const choicePage = useCallback((number) => {
        dispatch(
            {
                type: 'CHOICE_PAGE',
                page: number
            }
        )
    }, []);

    return (
        <section className='mt-5'>
            <h2 className='text-decoration-underline'>Exercice 2</h2>
            <p>Les produits</p>
            <FormSearchProduct search={search} />
            {state.results.isEmpty() ? '' : (<h4>{state.results?.count() > 0 ? `${state.results?.count() } résultats` : 'O résultat'}</h4>)}
            <FilterProducts filter={filter} />
            <Results results={state.results} page={state.page} />
            <Pages results={state.results} choicePage={choicePage} currentPage={state.page} />
        </section>
    )
}

export default Products;