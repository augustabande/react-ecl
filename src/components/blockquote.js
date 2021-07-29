import React from "react";
export default class Blockquote extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <div>
            <blockquote className="ecl-blockquote">
                <p className="ecl-blockquote__body">An interconnected grid will help deliver the ultimate goal of the Energy Union, to make sure affordable, secure and sustainable energy, and also growth across the EU.</p>
                <footer className="ecl-blockquote__attribution"><cite className="ecl-blockquote__author">President Juncker</cite></footer>
            </blockquote>
        </div>
      ); 
   }
}


