import React from "react";
import Header from "../siteHeader/siteHeader";
import Pageheader from "../pageHeader/pageHeader";
import Footer from "../footer/footer";

export default class MainTemplate extends React.Component{    
   constructor(props){ 
      super(props); 
   }
   render(){ 
       return( 
          <div> 
             <Header/> 
             <Pageheader/>
             {this.props.children} 
             <Footer/> 
         </div>
      ); 
   }
}