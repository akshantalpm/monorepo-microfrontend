import './App.css';
import {lazy} from "react";
const HomePage =  lazy(() => require('@micro/homepage/dist'));

const App = () => {
  return (
   <HomePage />
  );
};

export default App;
