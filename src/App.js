import React, { useEffect } from "react";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./screens/Profile";
import Footer from "./screens/Footer";
import Info from "./Info";

function App() {
  //If user is not defined
  const user =  useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Route path='/Info'>
              <Info/>
            </Route>
            <Route exact path="/">
              <Home />
              <Footer/>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
