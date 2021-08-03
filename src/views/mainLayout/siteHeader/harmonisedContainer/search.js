import React from "react";
export default class Search extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <div> 
           <div className="ecl-site-header-harmonised__action">
               <div className="ecl-site-header-harmonised__search-container">
                    <a className="ecl-link ecl-link--standalone ecl-site-header-harmonised__search-toggle" href="/example" data-ecl-search-toggle="true" aria-controls="search-form-id" aria-expanded="false">
                        <svg focusable="false" aria-hidden="true" className="ecl-icon ecl-icon--s"><use xlinkHref="static/media/icons.3cf410f9.svg#general--search"></use></svg>Search
                    </a>
                   <form id="search-form-id" data-ecl-search-form="true" className="ecl-site-header-harmonised__search ecl-search-form" role="search">
                        <div className="ecl-form-group">
                            <label className="ecl-search-form__label ecl-form-label" for="search-input-id">Search</label>
                            <input id="search-input-id" type="search" className="ecl-search-form__text-input ecl-text-input"/>
                        </div>
                        <button aria-label="Search" type="submit" className="ecl-search-form__button ecl-button ecl-button--search">
                            <span className="ecl-button__container">
                                <span className="ecl-button__label" data-ecl-label="true">Search</span>
                                <svg focusable="false" aria-hidden="true" data-ecl-icon="true" className="ecl-button__icon ecl-button__icon--after ecl-icon ecl-icon--xs">
                                    <use xlinkHref="static/media/icons.3cf410f9.svg#general--search"></use></svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
      ); 
   }
}