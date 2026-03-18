import { useState } from "react";

export default function FormSearchProduct({search}){
    // Déclaration d'état local
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        // console.log(search)
        if(searchTerm.trim() !== ''){
            search(searchTerm);
            // console.log('resul', results.length)
        }
    }

    const handleChangeSearch = (e) => {
        if(e.target.value !== '' ){
            setSearchTerm(e.target.value)
        }
    }

    return (
        <form onSubmit={handleSubmitSearch} action="#" method='POST' className='bg-primary-subtle pb-4 rounded-3 m-auto d-flex justify-content-around align-items-end' style={{width: 400}}>
            <div>
                <label htmlFor="q" className='me-2 form-label'>Chercher un produit</label>
                <input onChange={handleChangeSearch} type="search" name="q" id="q" className='form-control-sm' />
            </div>
            <button className='btn btn-primary mt-4 mb-1 d-flex align-items-center' type="submit" style={{height: 30}}>Chercher</button>
        </form>        
    )
}