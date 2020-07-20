import React from 'react';

export default function Order(props) {
    return (
        <div className="build-pizza">

        <form>
            <h1>Build Your Pizza</h1>
            <section>
                <div className="form-heading">
                    <h2>Enter Your Name</h2>
                    <small>required</small>
                </div>
                <label htmlFor="name">Name: </label>
                <input onChange={props.onInputChange} id="name" name="name" type="text"/>
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
                <input onChange={props.onInputChange} name="specialInstructions" id="specialInstructions" type="text"/>
            </section>
            <button>Add to Order</button>
        </form>
    </div>
    );
};