import React from "react";
export default class Relatedsites extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <div>
            <section class="ecl-footer-harmonised__section">
                <div class="ecl-footer-harmonised__title ecl-footer-harmonised__title--separator">Related sites</div>
                <ul class="ecl-footer-harmonised__list">
                <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Related link 1">Related link 1</a></li>
                <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Related link 2">Related link 2</a></li>
                <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Related link 3">Related link 3</a></li>
                <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Related link 4">Related link 4</a></li>
                <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Related link 5">Related link 5</a></li>
                </ul>
            </section>
        </div>
     ); 
 }
}