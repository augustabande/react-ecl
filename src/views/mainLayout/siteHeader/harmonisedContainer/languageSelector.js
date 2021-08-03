import React from "react";
export default class LanguageSelector extends React.Component{ 
    // eslint-disable-next-line no-useless-constructor
    constructor(props){ 
      super(props); 
    }
    render(){ 
      return( 
        <a className="ecl-link ecl-link--standalone ecl-site-header-harmonised__language-selector" href="/example" aria-label="English" data-ecl-language-selector="true" aria-controls="language-list-overlay"><span className="ecl-site-header-harmonised__language-icon">
            <svg focusable="false" aria-hidden="true" className="ecl-site-header-harmonised__icon ecl-icon ecl-icon--s">
                <use xlinkHref="images/icons.svg#general--language"></use>
            </svg>
            <span className="ecl-site-header-harmonised__language-code">en</span></span>English
        </a>
      ); 
    }
}      