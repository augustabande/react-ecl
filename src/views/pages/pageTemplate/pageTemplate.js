import React from "react";
import Pageheader from "./pageHeader/pageHeader";
import Home from "./singlePage/home";
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
            { /*<Home/>*/}
             <Footer/> 
         </div>
      ); 
   }
}