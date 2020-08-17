import React from 'react';
import { Navbar } from '../src/sections/';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home, About, Contact, Donate, Programs, NotFound} from '../src/pages/';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/donate' component={Donate} />
        <Route path='/programs' component={Programs} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
