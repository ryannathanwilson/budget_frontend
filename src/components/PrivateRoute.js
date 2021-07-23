import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, ...props }) => {
    return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
