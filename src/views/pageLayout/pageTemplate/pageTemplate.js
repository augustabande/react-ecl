import React from "react";
import Pageheader from "../pageHeader/pageHeader";
import Home from "../pageContent/home/home";


export default class PageTemplate extends React.Component{    
   constructor(props){ 
      super(props); 
   }
   render(){ 
       return( 
          <div>               
             <Pageheader/> 
             <Home/>             
         </div>
      ); 
   }
}