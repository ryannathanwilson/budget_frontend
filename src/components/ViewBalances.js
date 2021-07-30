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
        if (typeof example === "object" && example !== null) {
            console.log(example);
            if ("Food" in example) {
                setMyInput(example.Food.thisMonthExpenses);
            }
        }
    }, [moneyData]);

    return (
        <div id="view-balances">
            <h1>Here's the situation</h1>
            {Object.keys(moneyData).map((keyName, i) => (
                <div key={i}>
                    <div className="balance-card">
                        <div className="category">{keyName.toUpperCase()}</div>
                        <div className="remaining">
                            ${moneyData[keyName].totalRemainingBudget} left
                        </div>
                    </div>
                    <ul>
                        <li>Expenses this month: ${moneyData[keyName].thisMonthExpenses}</li>
                        <li>Budget this month: ${moneyData[keyName].thisMonthBudget}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ViewBalances;
