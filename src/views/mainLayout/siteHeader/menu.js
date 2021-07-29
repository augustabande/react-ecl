import React from "react";
export default class Menu extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
       
         <section className="ecl-menu__inner" data-ecl-menu-inner="true">
            <header className="ecl-menu__inner-header">
                <button data-ecl-menu-close="true" type="submit" className="ecl-menu__close ecl-button ecl-button--text">
                    <span className="ecl-menu__close-container ecl-button__container">
                        <svg focusable="false" aria-hidden="true" data-ecl-icon="true" className="ecl-button__icon ecl-button__icon--before ecl-icon ecl-icon--s">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--close-filled"></use>
                        </svg>
                        <span className="ecl-button__label" data-ecl-label="true">Close</span>
                    </span>
                </button>
                <div className="ecl-menu__title">Menu</div>
                <button data-ecl-menu-back="true" type="submit" className="ecl-menu__back ecl-button ecl-button--text">
                    <span className="ecl-button__container">
                        <svg focusable="false" aria-hidden="true" data-ecl-icon="true" className="ecl-button__icon ecl-button__icon--before ecl-icon ecl-icon--s ecl-icon--rotate-270">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                        </svg>
                        <span className="ecl-button__label" data-ecl-label="true">Back</span>
                    </span>
                </button>
            </header>
            <ul className="ecl-menu__list">
                <li className="ecl-menu__item" data-ecl-menu-item="true"><a href="/example" className="ecl-menu__link" data-ecl-menu-link="true">Home</a></li>
                <li className="ecl-menu__item ecl-menu__item--current ecl-menu__item--has-children" data-ecl-has-children="true" data-ecl-menu-item="true">
                    <a href="/example" className="ecl-menu__link ecl-menu__link--current" data-ecl-menu-link="true">
                        Item 2
                        <svg focusable="false" aria-hidden="true" className="ecl-menu__link-icon ecl-icon ecl-icon--xs ecl-icon--rotate-90">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                        </svg>
                    </a>
                    <div className="ecl-menu__mega" data-ecl-menu-mega="true">
                        <ul className="ecl-menu__sublist">
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.1</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.2</a></li>
                        <li className="ecl-menu__subitem ecl-menu__subitem--current" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink ecl-menu__sublink--current">Item 2.3</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.4</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.5</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.6</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.7</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.8</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.9</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.10</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.11</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.12</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.13</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.14</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.15</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 2.16</a></li>
                        </ul>
                    </div>
                </li>
                <li className="ecl-menu__item ecl-menu__item--has-children" data-ecl-has-children="true" data-ecl-menu-item="true">
                    <a href="/example" className="ecl-menu__link" data-ecl-menu-link="true">
                        Item 3
                        <svg focusable="false" aria-hidden="true" className="ecl-menu__link-icon ecl-icon ecl-icon--xs ecl-icon--rotate-90">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                        </svg>
                    </a>
                    <div className="ecl-menu__mega" data-ecl-menu-mega="true">
                        <ul className="ecl-menu__sublist">
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 3.1</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 3.2</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 3.3</a></li>
                        </ul>
                    </div>
                </li>
                <li className="ecl-menu__item ecl-menu__item--has-children" data-ecl-has-children="true" data-ecl-menu-item="true">
                    <a href="/example" className="ecl-menu__link" data-ecl-menu-link="true">
                        Item 4
                        <svg focusable="false" aria-hidden="true" className="ecl-menu__link-icon ecl-icon ecl-icon--xs ecl-icon--rotate-90">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                        </svg>
                    </a>
                    <div className="ecl-menu__mega" data-ecl-menu-mega="true">
                        <ul className="ecl-menu__sublist">
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.1</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.2</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.3 with a very long label going on 2 lines</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.4</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.5</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.6</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.7</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.8</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.9</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.10</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.11</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.12</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.13</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 4.14</a></li>
                        </ul>
                    </div>
                </li>
                <li className="ecl-menu__item ecl-menu__item--has-children" data-ecl-has-children="true" data-ecl-menu-item="true">
                    <a href="/example" className="ecl-menu__link" data-ecl-menu-link="true">
                        Item 5
                        <svg focusable="false" aria-hidden="true" className="ecl-menu__link-icon ecl-icon ecl-icon--xs ecl-icon--rotate-90">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                        </svg>
                    </a>
                    <div className="ecl-menu__mega" data-ecl-menu-mega="true">
                        <ul className="ecl-menu__sublist">
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 5.1</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 5.2</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 5.3</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 5.4</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 5.5</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 5.6</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 5.7</a></li>
                        </ul>
                    </div>
                </li>
                <li className="ecl-menu__item ecl-menu__item--has-children" data-ecl-has-children="true" data-ecl-menu-item="true">
                    <a href="/example" className="ecl-menu__link" data-ecl-menu-link="true">
                        Item 6
                        <svg focusable="false" aria-hidden="true" className="ecl-menu__link-icon ecl-icon ecl-icon--xs ecl-icon--rotate-90">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                        </svg>
                    </a>
                    <div className="ecl-menu__mega" data-ecl-menu-mega="true">
                        <ul className="ecl-menu__sublist">
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.1</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.2</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.3</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.4</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.5</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.6</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.7</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.8</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.9 with a very long label</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.10</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.11</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.12</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.13</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.14</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.15</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 6.16</a></li>
                        </ul>
                    </div>
                </li>
                <li className="ecl-menu__item ecl-menu__item--has-children" data-ecl-has-children="true" data-ecl-menu-item="true">
                    <a href="/example" className="ecl-menu__link" data-ecl-menu-link="true">
                        Item 7 with a long label
                        <svg focusable="false" aria-hidden="true" className="ecl-menu__link-icon ecl-icon ecl-icon--xs ecl-icon--rotate-90">
                        <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                        </svg>
                    </a>
                    <div className="ecl-menu__mega" data-ecl-menu-mega="true">
                        <ul className="ecl-menu__sublist">
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.1</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.2</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.3</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.4</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.5</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.6</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.7</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.8</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.9</a></li>
                        <li className="ecl-menu__subitem" data-ecl-menu-subitem="true"><a href="/example" className="ecl-menu__sublink">Item 7.10</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            </section>
        
      ); 
   }
}