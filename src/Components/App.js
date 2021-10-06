import React, { useState } from "react";
import Homepage from "./HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./sign-up-in/signIn";
import SignUp from "./sign-up-in/SignUp";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/signin" exact component={SignIn}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
