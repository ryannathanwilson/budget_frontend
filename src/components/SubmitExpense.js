import React, { useState } from "react";

const SubmitExpense = () => {
	const [date,setDate] = useState("");
	const [expense,setExpense] = useState("");
	const [vendor,setVendor] = useState("");
	const [notes,setNotes] = useState("");
	const [user,setUser] = useState("");
	const [category,setCategory] = useState("");
    let data = {
        date: "2021-07-31",
        expense: "50.00",
        vendor: "my desk",
        notes: "score",
        user: 1,
        category: 1,
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/expenses/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.access}`,
            },
            body: JSON.stringify({
				date: `${date}`,
				expense: `${expense}`,
				vendor: `${vendor}`,
				notes: `${notes}`,
				user: `${user}`,
				category: `${category}`,
			}),
        }).then((res) => {
            console.log("request compete! response:", res);
            console.log("submission", e);
        });
    };
    return (
        <div>
            <h1>more expenses???</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>date</label>
                <input type="date" value ={date} onChange={(e) => setDate(e.target.value)} />
                <label>expense</label>
                <input type="text" value ={expense} onChange={(e) => setExpense(e.target.value)} />
                <label>vender</label>
                <input type="text" value ={vendor} onChange={(e) => setVendor(e.target.value)} />
                <label>notes</label>
                <input type="text" value ={notes} onChange={(e) => setNotes(e.target.value)} />
                <label>user</label>
                <input type="number" value ={user} onChange={(e) => setUser(e.target.value)} />
                <label>category</label>
                <input type="text" value ={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SubmitExpense;
