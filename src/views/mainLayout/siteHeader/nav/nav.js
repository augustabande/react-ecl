import React from "react";
import Menu from "../nav/menu";
export default class Nav extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
         <nav data-ecl-auto-init="Menu" className="ecl-menu--group1 ecl-menu ecl-menu--transition" aria-expanded="false" data-ecl-menu="true" data-ecl-auto-initialized="true">
            <div className="ecl-menu__overlay" data-ecl-menu-overlay="true"></div>
            <div className="ecl-container ecl-menu__container">
               <a className="ecl-link ecl-link--standalone ecl-menu__open" href="/example" data-ecl-menu-open="true"><svg focusable="false" aria-hidden="true" className="ecl-icon ecl-icon--s"><use xlinkHref="static/media/icons.3cf410f9.svg#general--hamburger"></use></svg>Menu</a>
               <div className="ecl-menu__site-name">Site name</div>
               <Menu />

            </div>
         </nav>
      ); 
   }
}