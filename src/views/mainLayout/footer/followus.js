import React from "react";
export default class Followus extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
       
        <section className="ecl-footer-harmonised__section">
            <div className="ecl-footer-harmonised__title ecl-footer-harmonised__title--separator">Follow us on</div>
            <ul className="ecl-footer-harmonised__list ecl-footer-harmonised__list--inline">
                <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before" aria-label="Link to Facebook"><svg focusable="false" aria-hidden="true" className="ecl-link__icon ecl-icon ecl-icon--xs">
                    <use xlinkHref="images/icons.svg#branded--facebook"></use>
                    </svg>&nbsp;<span className="ecl-link__label">Facebook</span></a></li>
                <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before" aria-label="Link to Twitter"><svg focusable="false" aria-hidden="true" className="ecl-link__icon ecl-icon ecl-icon--xs">
                    <use xlinkHref="images/icons.svg#branded--twitter"></use>
                    </svg>&nbsp;<span className="ecl-link__label">Twitter</span></a></li>
                <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before" aria-label="Link to Linkedin"><svg focusable="false" aria-hidden="true" className="ecl-link__icon ecl-icon ecl-icon--xs">
                    <use xlinkHref="images/icons.svg#branded--linkedin"></use>
                    </svg>&nbsp;<span className="ecl-link__label">Linkedin</span></a></li>
            </ul>
        </section>

       
        
     ); 
 }
}