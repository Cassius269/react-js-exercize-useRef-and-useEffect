import { collect } from "collect.js";

function productReducer(state, action){
    switch(action.type){
        case 'SEARCH':
            console.log('recherche de produit');
            console.log('terme recherché',action.q)
            return {
                // état à retourner
                ...state, // conserver l'état existant
                results: collect(state.products).filter(p => p.name.toLowerCase().includes((action.q).toLowerCase()) && p.stock > 0)
            }
        case 'FILTER_PRICE':
            console.log('filtre prix cliqué');
            console.log('état après filtre prix', collect(state.results).sortBy('price').filter(p => p.stock > 0));

            return {
            // état à retourner
            ...state, 
            results: collect(state.results).sortBy('price').filter(p => p.stock > 0)
        };

        case 'FILTER_NAME':
            console.log('filtre nom cliqué');
            console.log(collect(state.results).sortBy('name').filter(p => p.stock > 0));
           
            // Prépare le tri
            collect().macro('intlCollator', function intlCollator(lang, key) {
                    return this.sort((a, b) => new Intl.Collator(lang).compare(a[key], b[key]));
            });

            return {
            // état à retourner
            ...state, 
            results: collect(state.results).intlCollator('fr', 'name').filter(p => p.stock > 0)
        };

        case 'FILTER_STOCK':
            console.log('filtre stock cliqué');
            console.log(collect(state.results).sortBy('stock').filter(p => p.stock > 0));
        return {
            // état à retourner
            ...state, 
            results: collect(state.results).sortBy('stock').filter(p => p.stock > 0)
        };

        case 'CHOICE_PAGE' : 
            console.log('page de résultat cliqué');
            console.log('PAGE', action.page)
            return {
                // état à retourner
                ...state,
                page: action.page // modifier la page courante
            }

        default :{
            throw new Error('action inconnue'); 
            }  
    }
}


export default productReducer;