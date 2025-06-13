import React, { useEffect, useState } from "react"; 
import { data, Link, useNavigate } from "react-router-dom";

function UpdateFellows(){
    // "fellows" & their parameters
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    // naviagtion
    const navigate = useNavigate();

    // pass data to the backend
    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`http://localhost:6000/Update/${id}`, { firstName, lastName, email })
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
                    <h2>Update Fellow</h2>
                    <div>
                        <label htmlFor="firstName"></label>
                        <input type="text" placeholder="Enter firstName"
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName"></label>
                        <input type="text" placeholder="Enter lastName"
                            onChange = {e => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="text" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success"> Submit </button>
                </form>
             </div>
        </div>
    );
};

export default UpdateFellows;