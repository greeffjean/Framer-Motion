import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Base from './pages/Base';
import Toppings from './pages/Toppings';
import Order from './pages/Order';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);


  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
      <Switch location={location} key={location.key}>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order showModal={showModal} setShowModal={setShowModal} pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;