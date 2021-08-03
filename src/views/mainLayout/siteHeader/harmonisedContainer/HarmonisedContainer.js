import React from "react";
import EClogo from "./ecLogo";
import Login from "../harmonisedContainer/login";
import LanguageSelector from "../harmonisedContainer/languageSelector";
import Search from "../harmonisedContainer/search";

export default class HarmonisedContainer extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return(         
        <div className="ecl-site-header-harmonised__container ecl-container">
            <div className="ecl-site-header-harmonised__top">
               <EClogo/>
               <div class="ecl-site-header-harmonised__action">
                  <Login/> 
                  <LanguageSelector/> 
                  <Search/> 
               </div>                          
            </div> 
        </div>        
      ); 
   }
}

