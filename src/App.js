import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainTemplate from "./views/mainLayout/mainTemplate/mainTemplate";
import Home from "./views/pageLayout/pageContent/home/home";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
            <MainTemplate>
               <Switch>
                   <Route exact path='/' views={Home}/>
                   {/*<Route path="/about" component={About} />*/}
               </Switch>
            </MainTemplate>
         </BrowserRouter>
    );
  } 
}
export default App;
