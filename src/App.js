import React, { useEffect } from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";

function App() {
  //If user is not defined
  const user = null;
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
     if(userAuth){
       console.log(userAuth)
     }
     else{
     
     }
   })
    return unsubscribe ;
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (
      
            <Login />
        
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
