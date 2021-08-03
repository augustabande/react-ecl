import React from "react";
import Header from "../siteHeader/siteHeader";

import Pagetemplate from "../../pageLayout/pageTemplate/pageTemplate";
import Footer from "../footer/footer";

export default class MainTemplate extends React.Component{    
   constructor(props){ 
      super(props); 
   }
   render(){ 
       return( 
          <div> 
             <Header/> 
            
             <Pagetemplate/>
             <Footer/> 
         </div>
      ); 
   }
}