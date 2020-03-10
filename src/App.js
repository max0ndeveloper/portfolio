import React from 'react';
import './styles/style.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Hdr from "./Components/Header/Header"
import Content from "./Components/Content/Content";
import {Home} from "./links/Home";
import {About} from "./links/About";
import {Portfolio} from "./links/Portfolio";
import {Contact} from "./links/Contact";
import Preloader from "./Components/Preloader/Preloader";

function App() {
  return (
	      <div className="content">
	      <BrowserRouter>
          {/*<Preloader/>*/}
		      <Hdr/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
	        <Route render = { ()=> <h2>Error 404: Page not found.</h2> } />
        </Switch>
	      </BrowserRouter>
      </div>
  );
}

export default App;
