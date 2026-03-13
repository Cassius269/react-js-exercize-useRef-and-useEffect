function FormSearch(){
    return (
        <form action="#" method="POST" onSubmit={(e) => e.preventDefault()} style={{maxWidth: 400}} className="m-auto">
            <label htmlFor="q" className="form-label">Recher un utilisateur par son mail</label>
            <input id="q" type="search" name="q" className="form-control mb-3" />
            <button type="submit" className="btn btn-secondary text-white w-100">Chercher</button>
        </form>
    )
}

export default FormSearch;