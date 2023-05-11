function SearchQueryAndKind(){

    return (
    <>
     <div className="input-group my-4">
        <input type="text" className="form-control" placeholder="Search..." />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">🔍</button>
    </div>
    <div>
        <button className="btn btn-secondary mx-2">Natural</button>
        <button className="btn btn-secondary mx-2">White</button>
        <button className="btn btn-secondary mx-2">Red</button>

    </div>

    </>
    )
}

export default SearchQueryAndKind