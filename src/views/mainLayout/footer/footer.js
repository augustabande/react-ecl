import React from "react";
import ContactUs from "./contactus";
import Followus from "./followus";
import Aboutus from "./aboutus";
import Relatedsites from "./relatedsites";
export default class Footer extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
         <footer className="ecl-footer-harmonised ecl-footer-harmonised--group1">
            <div className="ecl-container ecl-footer-harmonised__container">
               <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section1"><a href="/example" className="ecl-footer-harmonised__title ecl-link ecl-link--standalone" aria-label="Link to example">Site name</a>
                  <div className="ecl-footer-harmonised__description">This site is managed by the Directorate-General for &quot;DG identification&quot;</div>
               </section>
               <div className="ecl-footer-harmonised__section2">
                  <ContactUs/>
                  <Followus/>
               </div>
               <div className="ecl-footer-harmonised__section3">
                  <Aboutus/>
                  <Relatedsites/>
               </div>
               <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section6"></section>
               <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section7"><a href="https://ec.europa.eu/info/index_en" className="ecl-footer-harmonised__title ecl-link ecl-link--standalone">European Commission</a></section>
               <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section8">
                  <ul className="ecl-footer-harmonised__list">
                  <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Contact the European Commission">Contact the European Commission</a></li>
                  <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-after" aria-label="Link to Follow the European Commission"><span className="ecl-link__label">Follow the European Commission on social media</span>&nbsp;<svg focusable="false" aria-hidden="true" className="ecl-link__icon ecl-icon ecl-icon--xs">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--external"></use>
                        </svg></a></li>
                  <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Resources for partners">Resources for partners</a></li>
                  </ul>
               </section>
               <section className="ecl-footer-harmonised__section ecl-footer-harmonised__section9">
                  <ul className="ecl-footer-harmonised__list">
                  <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Language policy">Language policy</a></li>
                  <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Cookies">Cookies</a></li>
                  <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Privacy policy">Privacy policy</a></li>
                  <li className="ecl-footer-harmonised__list-item"><a href="/example" className="ecl-footer-harmonised__link ecl-link ecl-link--standalone" aria-label="Link to Legal notice">Legal notice</a></li>
                  </ul>
               </section>
            </div>
            </footer>
      ); 
   }
}