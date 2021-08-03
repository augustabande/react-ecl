import React from "react";
export default class EClogo extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
       
        <a className="ecl-link ecl-link--standalone ecl-site-header-harmonised__logo-link" href="/example" aria-label="European Commission">
         <img alt="European Commission logo" title="European Commission" className="ecl-site-header-harmonised__logo-image" src="images/logo--en.30b933cc.svg"/>
        </a>

       
     
      ); 
   }
}