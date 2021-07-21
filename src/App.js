import React, { useState } from "react";
import "./css/global.css";
import LoginForm from "./components/LoginForm";
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
    return (
        <div className="RNW REACT">
            <h1>BUDGE</h1>
            <Router>
                <Switch>
                    <LoginForm
                        handleUsername={handleUsername}
                        handlePassword={handlePassword}
                        username={username}
                        password={password}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
