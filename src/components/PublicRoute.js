import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isLoggedIn, ...props }) => {
	return (
		!isLoggedIn ? <Route {...props} /> : <Redirect to="/" />

	)
}


export default PublicRoute;
