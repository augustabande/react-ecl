import React from "react";
import Classnameheader from "../siteHeader/className";
import Languageselector from "../siteHeader/language_selector";
import Search from "../siteHeader/search";
import Login from "../siteHeader/login";
import Menu from "../siteHeader/menu";

export default class Header extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <div> 
         <header data-ecl-auto-init="SiteHeaderHarmonised" className="ecl-site-header-harmonised--group1 ecl-site-header-harmonised" data-ecl-auto-initialized="true">
            <div className="ecl-site-header-harmonised__container ecl-container">
               <div className="ecl-site-header-harmonised__top">
                  <a className="ecl-link ecl-link--standalone ecl-site-header-harmonised__logo-link" href="/example" aria-label="European Commission">
                     <img alt="European Commission logo" title="European Commission" className="ecl-site-header-harmonised__logo-image" src="images/logo--en.30b933cc.svg"/>
                  </a>
                  <Login/> 
                  <Languageselector/>
                  <Search/> 

               </div>
            </div>
            <Classnameheader/> 
            <div className="ecl-site-header-harmonised__banner">
               
               <Menu/>
            </div>
         </header>
        </div>
      ); 
   }
}