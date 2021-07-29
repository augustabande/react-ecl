import React from "react";
import Header from "../siteHeader/siteHeader";
import Pageheader from "../../pages/pageTemplate/pageHeader/pageHeader";
import Home from "../../pages/pageTemplate/singlePage/home";
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
             <Home/>
             <Footer/> 
         </div>
      ); 
   }
}