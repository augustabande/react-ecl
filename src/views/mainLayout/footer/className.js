import React from "react";
export default class Classnamefooter extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
    constructor(props){ 
        super(props); 
    }
    render(){ 
        return( 
            <div>
                <section class="ecl-footer-harmonised__section ecl-footer-harmonised__section6">
                <div class="ecl-footer-harmonised__content">More information on:</div>
                <ul class="ecl-footer-harmonised__list ecl-footer-harmonised__list--condensed">
                    <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Class name 1">Class name 1</a></li>
                    <li class="ecl-footer-harmonised__list-item"><a href="/example" class="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Class name 2">Class name 2</a></li>
                </ul>
                </section>
            </div>        
        ); 
    }
}