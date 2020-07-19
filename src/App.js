import React from "react";
import Header from './components/Header';
import Pizza from './Assets/Pizza.jpg';

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <img src={Pizza} alt='pic of pizza' />
      <Header />
    </div>
  );
};
export default App;
