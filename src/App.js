import React, { useEffect, useState, Error } from "react";
import "./css/global.css";
import LoginForm from "./components/LoginForm";
import ViewBalances from "./components/ViewBalances";
import Nav from "./components/Nav";
import SubmitExpense from "./components/SubmitExpense";
import EditBudget from "./components/EditBudget";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import useUserList from "./components/useUserList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginState = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const refresh_token = async () => {
    let response = await fetch("http://127.0.0.1:8000/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: localStorage.getItem("refresh"),
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("access", data.access);
      console.log(data.access);
      setIsLoggedIn(true);
      console.log("refreshed succesfully");
    } else {
      setIsLoggedIn(false);
      console.log("failed to refresh");
    }
  };

  useEffect(() => {
    refresh_token();
  }, []); // empty dependency array just runs once!

  return (
    <div className="RNW REACT">
      <h1>BUDGET</h1>
      <Router>
        <Nav />
        <Switch>
          <PrivateRoute
            isLoggedIn={isLoggedIn}
            path="/"
            exact
            render={() => <ViewBalances handleLoginState={handleLoginState} />}
          />
          <PrivateRoute
            isLoggedIn={isLoggedIn}
            path="/submit-expense"
            exact
            render={() => <SubmitExpense userList={useUserList} />}
          />
          <PrivateRoute
            isLoggedIn={isLoggedIn}
            path="/edit-budget"
            exact
            render={() => <EditBudget />}
          />
          <PublicRoute
            isLoggedIn={isLoggedIn}
            path="/login"
            exact
            render={() => (
              <LoginForm
                handleUsername={handleUsername}
                handlePassword={handlePassword}
                handleLoginState={handleLoginState}
                isLoggedIn={isLoggedIn}
                username={username}
                password={password}
              />
            )}
          />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
