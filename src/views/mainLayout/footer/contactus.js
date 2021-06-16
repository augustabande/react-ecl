import React from "react";
export default class Pageheader extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <div>
            <section class="ecl-footer-harmonised__section">
                <div class="ecl-footer-harmonised__title ecl-footer-harmonised__title--separator">Contact us</div>
                <ul class="ecl-footer-harmonised__list">
                <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Contact information of the DG">Contact information of the DG</a></li>
                </ul>
                </section>
            </div>
        ); 
    }
}