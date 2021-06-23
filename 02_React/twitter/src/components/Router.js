import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";
import { authService } from "fbase";

const AppRouter = ({ isLoggedIn, userObj }) => {
  const [logout, setLogout] = useState(false);
  authService.onAuthStateChanged((user) => {
    console.log(isLoggedIn + "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  });
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
