import React, { useEffect, useState } from "react"; 
import { data, Link, useNavigate } from "react-router-dom";

function CreateFellows(){
    // "fellows" & their parameters
    const [FirstName, setFirstName] = useState([""]);
    cosnt [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState([""]);

    // naviagtion
    const navigate = useNavigate();

    // pass data to the backend
    function handleSubmit() {
        e.preventDefault();
        axios.post("localhost:6000/create", {FirstName, LastName, Email})
        .then(res => {
            console.log(res);
            //navigate home if successful
            navigate("/");
        }).catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-cneter"> 
             <div className="bg-white">
                <form onSubmit={handleSubmit}>
                    <h2>Create Fellow</h2>
                    <div>
                        <label htmlFor="FirstName"></label>
                        <input type="text" placeholder="Enter FirstName"
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="LastName"></label>
                        <input type="text" placeholder="Enter LastName"></input>
                    </div>
                    <div>
                        <label htmlFor="Email"></label>
                        <input type="text" placeholder="Enter Email"
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success"> Submit </button>
                </form>
             </div>
        </div>
    );
};

export default CreateFellows;