import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <h1>YOU ARE LOGGED IN</h1>
            <Link to="/submit-expense">Submit Expense</Link>
            <Link to="/edit-budget">Edit Budget</Link>
        </div>
    );
};

export default Nav;
