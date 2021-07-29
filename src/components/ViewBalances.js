import React, { useEffect, useState } from "react";

const ViewBalances = (props) => {
    const [moneyData, setMoneyData] = useState({});
	const [myInput, setMyInput] = useState("");
    const getMoneyData = () => {
        fetch("http://127.0.0.1:8000/api/get_money_data/", {
            // fetch("http://127.0.0.1:8000/api/current_user/", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.access}`,
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setMoneyData(JSON.parse(myJson));
            })
            .catch(function (error) {
                console.log(`errorrrrr: ${error}`);
            });
    };
    useEffect(() => {
        getMoneyData();
    }, []);
    useEffect(() => {
        let example = moneyData;
        if (typeof(example) === "object" && example !== null) {
			console.log(example);
            if ("Food" in example) {
				setMyInput(example.Food.thisMonthExpenses);
            }
        }
    }, [moneyData]);

    return (
        <div>
            <h1>Here's the situation</h1>
            <div>{myInput}</div>
        </div>
    );
};

export default ViewBalances;
