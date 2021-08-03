import React from "react";
import HarmonisedContainer from "./harmonisedContainer/HarmonisedContainer";
import Classnameheader from "./className/className";
import Nav from "./nav/nav";

export default class Header extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
       
         <header data-ecl-auto-init="SiteHeaderHarmonised" className="ecl-site-header-harmonised--group1 ecl-site-header-harmonised" data-ecl-auto-initialized="true">
            <HarmonisedContainer/>
            <Classnameheader/> 
            <div className="ecl-site-header-harmonised__banner"></div>
            <Nav/>
         </header>
        
      ); 
   }
}