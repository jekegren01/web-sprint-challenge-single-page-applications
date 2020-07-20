import React from 'react';
import axios from 'axios';
import * as yup from 'yup';

export default function Order(props) {
    return (
        <div className="build-pizza">

        <form onSubmit={props.submit}>
            <h1>Build Your Pizza</h1>
            <section>
                <div className="form-heading">
                    <h2>Enter Your Name</h2>
                    <small>required</small>
                </div>
                <label htmlFor="name">Name: </label>
                <input value={props.pizza.name} onChange={props.onInputChange} id="name" name="name" type="text"/>
                <div className="errors">
                     {props.errors.name}
                 </div>
            </section>
            <section>
                <div className="form-heading">
                    <h2>Select a Size</h2>
                    <small>required</small>
                </div>
                <label htmlFor="size">Size: </label>
                <select onChange={props.onInputChange} id="size" name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </section>
            <section>
                <div className="form-heading">
                    <h2>Toppings</h2>
                    <small>choose up to 4</small>
                </div>
                <label htmlFor="pepperoni">
                   Pepperoni <input onChange={props.onInputChange} name="pepperoni" id="pepperoni" type="checkbox"/>
                </label>
                <label htmlFor="olives">
                   Olives <input onChange={props.onInputChange} name="olives"  id="olives" type="checkbox"/>
                </label>
                <label htmlFor="ham">
                   Ham <input onChange={props.onInputChange} name="ham"  id="ham" type="checkbox"/>
                </label>
                <label htmlFor="onion">
                   Onion <input onChange={props.onInputChange} name="onion"  id="onion" type="checkbox"/>
                </label>
            </section>
            <section>
                <div className="form-heading">
                    <h2>Anything Else?</h2>
                </div>
                <label htmlFor="specialInstructions">Special instructions: </label>
                <input value={props.pizza.specialInstructions} onChange={props.onInputChange} name="specialInstructions" id="specialInstructions" type="text"/>
            </section>
            <button>Add to Order</button>
        </form>
        
    </div>
    );
};