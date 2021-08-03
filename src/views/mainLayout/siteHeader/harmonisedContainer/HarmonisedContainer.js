import React from "react";
import EClogo from "./ecLogo";
import Login from "../harmonisedContainer/login";
import Languageselector from "../harmonisedContainer/search";
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
                     <Languageselector/>
                     
                  </div>
               </div> 
        </div>
        
      ); 
   }
}

