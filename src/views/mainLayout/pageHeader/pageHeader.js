import React from "react";
export default class Pageheader extends React.Component{ 
   // eslint-disable-next-line no-useless-constructor
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <div>
        <div className="ecl-page-header-harmonised">
          <div className="ecl-container">
            <nav data-ecl-auto-init="BreadcrumbHarmonised" className="ecl-page-header-harmonised__breadcrumb ecl-breadcrumb-harmonised" aria-label="You are here:" data-ecl-breadcrumb-harmonised="true">
              <ol className="ecl-breadcrumb-harmonised__container">
                <li className="ecl-breadcrumb-harmonised__segment" data-ecl-breadcrumb-harmonised-item="static" aria-hidden="false"><a href="/example" className="ecl-breadcrumb-harmonised__link ecl-link ecl-link--standalone">Home</a><svg focusable="false" aria-hidden="true" role="presentation" className="ecl-breadcrumb-harmonised__icon ecl-icon ecl-icon--2xs ecl-icon--rotate-90">
                    <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                  </svg></li>
                <li className="ecl-breadcrumb-harmonised__segment ecl-breadcrumb-harmonised__segment--ellipsis" aria-hidden="false" data-ecl-breadcrumb-harmonised-ellipsis="true"><button type="button" className="ecl-breadcrumb-harmonised__ellipsis" aria-label="Click here to expand" data-ecl-breadcrumb-harmonised-ellipsis-button="true">…</button><svg focusable="false" aria-hidden="true" role="presentation" className="ecl-breadcrumb-harmonised__icon ecl-icon ecl-icon--2xs ecl-icon--rotate-90">
                    <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                  </svg></li>
                <li className="ecl-breadcrumb-harmonised__segment" data-ecl-breadcrumb-harmonised-item="expandable" aria-hidden="false"><a href="/example" className="ecl-breadcrumb-harmonised__link ecl-link ecl-link--standalone">About the European Commission</a><svg focusable="false" aria-hidden="true" role="presentation" className="ecl-breadcrumb-harmonised__icon ecl-icon ecl-icon--2xs ecl-icon--rotate-90">
                    <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                  </svg></li>
                <li className="ecl-breadcrumb-harmonised__segment" data-ecl-breadcrumb-harmonised-item="expandable" aria-hidden="true"><a href="/example" className="ecl-breadcrumb-harmonised__link ecl-link ecl-link--standalone">Organisational structure</a><svg focusable="false" aria-hidden="true" role="presentation" className="ecl-breadcrumb-harmonised__icon ecl-icon ecl-icon--2xs ecl-icon--rotate-90">
                    <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                  </svg></li>
                <li className="ecl-breadcrumb-harmonised__segment" data-ecl-breadcrumb-harmonised-item="static" aria-hidden="false"><a href="/example" className="ecl-breadcrumb-harmonised__link ecl-link ecl-link--standalone">How the Commission is organised</a><svg focusable="false" aria-hidden="true" role="presentation" className="ecl-breadcrumb-harmonised__icon ecl-icon ecl-icon--2xs ecl-icon--rotate-90">
                    <use xlinkHref="static/media/icons.3cf410f9.svg#ui--corner-arrow"></use>
                  </svg></li>
                <li className="ecl-breadcrumb-harmonised__segment ecl-breadcrumb-harmonised__current-page" aria-current="page" data-ecl-breadcrumb-harmonised-item="static" aria-hidden="false">News</li>
              </ol>
            </nav>
            <div className="ecl-page-header-harmonised__meta">Meta info</div>
            <h1 className="ecl-page-header-harmonised__title">Page title</h1>
            <p className="ecl-page-header-harmonised__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
          </div>
        </div>
      </div>
      

        ); 
    }
 }
