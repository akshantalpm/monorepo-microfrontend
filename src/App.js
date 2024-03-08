import './output.css';
import './App.css';
import {lazy, useEffect, useState} from "react";
const HomePage =  lazy(() => require('@micro/homepage/dist'));

const App = () => {

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
