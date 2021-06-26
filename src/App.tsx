import React from 'react'
import CardPlace from './Cards/CardPlace'
import TogglePlace from './Cards/Toggle'
import MenuPlace from './Cards/Menu'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Action from './Cards/Action';
import ActionB from './Cards/ActionB';

function App() {
  return (
    <Router>
    <div className="wrapper">
    <MenuPlace/>
    <TogglePlace/>
        <Switch>
            <Route exact path='/' component={CardPlace}/>
            <Route path='/section/1' component={Action}/>
            <Route path='/section/2' component={ActionB}/>
        </Switch>
    </div>
</Router>
  );
}

export default App;
