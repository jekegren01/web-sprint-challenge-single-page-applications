import React, { useState } from "react";
import Header from './components/Header';
import Pizza from './Assets/Pizza.jpg';
import { Route, Link, Switch } from 'react-router-dom';
import Order from './components/Order';
import Home from './components/Home';

const App = () => {
  const [pizza, setPizza] = useState({
    name: "",
    size: "",
    pepperoni: false,
    ham: false,
    olives: false,
    onion: false,
    specialInstructions: "",
  });

  const onInputChange = e =>{
    let value = e.target.value;
    if(e.target.type === "checkbox") value = e.target.checked;
    setPizza({
      ...pizza,
      [e.target.name]: value
    })
  }
  console.log(pizza)

  return (
    <div >
      {/* <Header /> */}
      <nav>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/order'>Order</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/order">
          <Order pizza={pizza} setPizza={setPizza} onInputChange={onInputChange}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
