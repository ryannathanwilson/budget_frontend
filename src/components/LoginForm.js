import React from "react";


const LoginForm = function (props) {
    const handleLogin = async (e) => {
        e.preventDefault();
        let response = await fetch("http://127.0.0.1:8000/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: `${props.username}`,
                password: `${props.password}`,
            }),
        });
        let data = await response.json();
        if (response.status === 200) {
            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
			props.handleLoginState(true);
        } else {
            console.log("fail...");
			props.handleLoginState(false);
        }
    };
	return (
		<form onSubmit={e => handleLogin(e)}>
			<label>Username</label>
			<input
				type="text"
				value={props.username}
				onChange={props.handleUsername}
			/>
			<label>Password</label>
			<input
				type="password"
				value={props.password}
				onChange={props.handlePassword}
			/>
			<input
				type="submit"
			/>
		</form>
	)
}

export default LoginForm;