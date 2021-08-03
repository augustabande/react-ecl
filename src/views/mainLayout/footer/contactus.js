import React from "react";
export default class ContactUs extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <section className="ecl-footer-harmonised__section">
            <div className="ecl-footer-harmonised__title ecl-footer-harmonised__title--separator">Contact us</div>
            <ul className="ecl-footer-harmonised__list">
                <li className="ecl-footer-harmonised__list-item">
                    <a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Contact information of the DG">Contact information of the DG</a>
                </li>
            </ul>
        </section>
        ); 
    }
}