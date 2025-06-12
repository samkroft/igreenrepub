import React, { useEffect, useState } from "react"; 
import { data, Link } from "react-router-dom";

function Fellows(){
    // manages state of appearance onscreen
    const [fellows, setFellows] = useState([]);

    // api call to host
    useEffect(() => {
        axios.get("localhost:6000")
        .then(res => setFellows.data)
        .catch(err => console.log(err))
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-cneter"> 
            <div className="W-50 bg-green rounded">
                <Link Link = "/create" className="btn btn-success"> Insert + </Link>
                <table>
                    <thead>
                        <tr>
                            <th> Firstname </th>
                            <th> Lastname </th>
                            <th> Email </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fellows.map((data, i) => (
                                <tr key={i}>
                                    <td>data.Firstname</td>
                                    <td>data.Lastname</td>
                                    <td>data.Email</td>
                                    <td>
                                        <button className="btn btn-primary"> Update </button>
                                        <button className="btn btn-danger"> Delete </button>
                                    </td>
                                </tr>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Fellows;