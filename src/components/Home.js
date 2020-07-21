import React from 'react';
import Pizza from '../Assets/Pizza.jpg'

function Home(props) {
    return (
        <div>
            <h1>Lambda Eats</h1>
            <img src={Pizza} alt='pic of pizza' />
        </div>
    );
};

export default Home;