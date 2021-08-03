import React from "react";

export default class Home extends React.Component {
    constructor(props) {
      super(props);      
    }
  
    render() {
      return (
        <div> 
          <main id="ecl-main-content" class="ecl-u-pv-2xl ecl-u-pv-md-3xl">
            <div class="ecl-container ecl-u-type-m"> Home page</div>
          </main>           
        </div>
      )
    }
}