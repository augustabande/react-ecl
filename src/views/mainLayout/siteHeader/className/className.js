import React from "react";
export default class Classnameheader extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
       
           <div className="ecl-site-header-harmonised__banner-top">
               <div className="ecl-container"><a href="/example" className="ecl-link ecl-link--standalone">Class name</a></div>
           </div>
        
      ); 
   }
}