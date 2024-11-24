import React from "react";

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
            className="form-control"  
            value={props.value}
            onChange={(event) => props.setSearch(event.target.value)}
            placeholder="Search Movies">
            </input>
        </div>
    )
}

export default SearchBox;