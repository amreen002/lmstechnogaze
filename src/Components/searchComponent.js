import React from "react";

function SearchComponent({closeSearch},{openSearch}){

    return(
        <>
        <div class="search-input-area show">
        <div class="container">
            <div class="search-input-inner">
                <div class="input-div">
                    <input class="search-input autocomplete ui-autocomplete-input"  value={openSearch} type="text" placeholder="Search by keyword or #" autocomplete="off"  onChange={openSearch}/>
                    <button ><i class="far fa-search"></i></button>
                </div>
            </div>
        </div>
        <div id="close" class="search-close-icon"><i class="far fa-times" onClick={closeSearch}></i></div>
    </div>
        </>
    )
}
export default SearchComponent