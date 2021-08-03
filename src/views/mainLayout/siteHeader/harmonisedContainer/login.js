import React from "react";
export default class Login extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return(             
        <div className="ecl-site-header-harmonised__login-container">
            <a className="ecl-link ecl-link--standalone ecl-site-header-harmonised__login-toggle" href="/example" data-ecl-login-toggle="true" aria-controls="login-box-id" aria-expanded="false">
                <svg focusable="false" aria-hidden="true" className="ecl-site-header-harmonised__icon ecl-icon ecl-icon--s"><use xlinkHref="images/icons.svg#general--logged-in"></use></svg>Logged in
                <svg focusable="false" aria-hidden="true" className="ecl-site-header-harmonised__login-arrow ecl-icon ecl-icon--xs"><use xlinkHref="images/arrow-down.svg"></use></svg>
            </a>
            <div id="login-box-id" className="ecl-site-header-harmonised__login-box" data-ecl-login-box="true">
                <p className="ecl-site-header-harmonised__login-description">Logged in as &lt;last name&gt;, &lt;first name&gt;</p>
                <hr className="ecl-site-header-harmonised__login-separator"/>
                <a href="/example" className="ecl-link ecl-link--standalone">Log out</a>
            </div>
        </div>        
      ); 
   }
}