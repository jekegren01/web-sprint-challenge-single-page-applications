import React, { useState } from "react";
// import Header from './components/Header';
// import Pizza from './Assets/Pizza.jpg';
import { Route, Link, Switch } from 'react-router-dom';
import Order from './components/Order';
import Home from './components/Home';
import axios from 'axios';
import * as yup from 'yup';

const App = () => {
  const [pizza, setPizza] = useState({
    name: "",
    size: "small",
    pepperoni: false,
    ham: false,
    olives: false,
    onion: false,
    specialInstructions: "",
  });

  const [errors, setErrors] = useState({

  });

  const onInputChange = e =>{
    e.persist();
    let value = e.target.value;
    yup.reach(formSchema, e.target.name)
    .validate(value)
    .then(valid=>{
      setErrors({
        ...errors,
        [e.target.name]: ""
      })
    })
    .catch(err=>{
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      })
    })
    if(e.target.type === "checkbox") value = e.target.checked;
    setPizza({
      ...pizza,
      [e.target.name]: value
    });
  }
  console.log(pizza)

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be longer than 2 characters"),
    pepperoni: yup
      .bool(),
    ham: yup
      .bool(),
    olives: yup
      .bool(),
    onion: yup
      .bool(),
    size: yup
      .string()
      .required("Size is required"),
    specialInstructions: yup
      .string()
  });

  const submitOrder = e => {
    e.preventDefault();
    axios.post("https://reqres.in/api/pizza", pizza)
    .then((data) => {
      console.log(data)
      setPizza([...pizza, data.data])})
      .catch(err=>{
      console.log(err);
    })
  }
console.log(pizza);
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
          <Order errors={errors} submit={submitOrder} pizza={pizza} setPizza={setPizza} onInputChange={onInputChange}/>
          {/* After order button is pushed */}
        <div>
        Order Information
          {/* {pizza.map((onepizza, i) =>(
            <div key={i}>
              {onepizza}
            </div>
          ))} */}
        </div>
       
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
