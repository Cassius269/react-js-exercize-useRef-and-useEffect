import { memo, useCallback, useRef, useState } from "react";

function FormSearchProduct({search}){
    // Déclaration d'état local
    const [isShown, setIsShown] = useState(false);

    // Déclaration de réference locale
    const searchTerm = useRef('');

    const handleSubmitSearch = useCallback((e) => {
        e.preventDefault();
        // console.log(search)
        if(searchTerm.current.trim() !== ''){
            search(searchTerm.current);
            // console.log('resul', results.length)
        }
    },[search]);

    const handleChangeSearch = useCallback((e) => {
            searchTerm.current = e.target.value;
            if(e.target.value !== ''){
                setIsShown(false);
            }else {
                setIsShown(true)
            }
    }, []);

    return (
        <form onSubmit={handleSubmitSearch} action="#" method='POST' className='bg-primary-subtle pb-5 rounded-3 m-auto d-flex justify-content-around align-items-end position-relative' style={{width: 400}}>
            <div>
                <label htmlFor="q" className='me-2 form-label'>Chercher un produit</label>
                <input onChange={handleChangeSearch} type="search" name="q" id="q" className='form-control-sm' />
            </div>
            <i className="text-danger" style={{position: 'absolute', top: 51, right: 110}}>{isShown && 'veuillez entrer un produit'}</i>
            <button className='btn btn-primary mt-4 mb-1 d-flex align-items-center' type="submit" style={{height: 30}}>Chercher</button>
        </form>        
    )
}


export default memo(FormSearchProduct);