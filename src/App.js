import React, { useState } from "react";
import Header from './components/Header';
import Pizza from './Assets/Pizza.jpg';
import { Route, Link, Switch } from 'react-router-dom';
import Order from './components/Order';

const App = () => {
  const [pizza, setPizza] = useState([]);

  return (
    <div >
      <h1>Lambda Eats</h1>
      <img src={Pizza} alt='pic of pizza' />
      {/* <Header /> */}
      <nav>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/order'>Order</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/order">
          <Order pizza={pizza} setPizza={setPizza}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
