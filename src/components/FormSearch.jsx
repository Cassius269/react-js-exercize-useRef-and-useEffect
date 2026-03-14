import { useEffect, useRef, useState } from "react";

function FormSearch(){
    // Déclaration de l'état de l'email entré par l'utilisateur
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Créer une réference de l'input email
    const inputEmailRef = useRef(null);

    // Après rendu du composant
    useEffect(() => {
        inputEmailRef.current.focus() // mettre le focus sur le champs email près rendu du composant
    }, []); // execution unique au montage du composant

    // Gérer la saisie utilisateur
    const handleChange = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${email}`);
        if(isValidEmail(email)){
            // faire traitement après email valide
        };
    }

    const handleFocus = () => {
        setIsFocused(true);
        console.log('focus in')
    }

    // Equivalent focus out de l'input email
    const handleBlur = (e) => {
        setIsFocused(false);
        setEmail('');
        console.log('focus out');
    }

    return (
        <form action="#" method="POST" onSubmit={handleSubmit} style={{maxWidth: 400}} className="m-auto bg-primary bg-opacity-25 rounded-3 p-3">
            <label htmlFor="q" className="form-label">Recher un utilisateur par son mail</label>
            <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} ref={inputEmailRef} id="q" type="search" name="q" placeholder="entrer un email" className={`form-control mb-3 ${email === '' ? 'bg-white text-danger' : ''} ${isValidEmail(email) ? "bg-secondary-subtle" : "bg-danger text-white"}`} value={isFocused ? email : ''}/>
            <i className="text-danger">{(email.length > 4  && email.length <= 50) && isValidEmail(email)  ? 'correct' : (email === '' ? '' : 'incorrect')}</i>
            <button type="submit" className="btn btn-secondary text-white w-100">Chercher</button>
        </form>
    )
}

function isValidEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email); 
}

export default FormSearch;