import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './screens/LoginScreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        //logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>

        {!user ? (<Login />) :
         (
          <Switch>
            <Route exact path="/">
               <HomeScreen />
            </Route>
            <Route path="/profile">
               <ProfileScreen />
            </Route>
        </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;
