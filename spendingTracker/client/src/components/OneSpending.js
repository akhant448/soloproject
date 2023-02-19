import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from "moment";

const OneSpending = () => {

    const {id} = useParams();
    const [oneSpending, setOneSpending] =useState({});
    const navigate = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/spending/${id}`)
        .then((response) => {
            console.log(response);
            console.log(response.data);
            setOneSpending(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        })
    }, [id]);

    const deleteSpending = () => {
        axios.delete(`http://localhost:8000/api/spending/${id}`)
        .then((response) => {
            console.log(response.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response);
        })
    };

    const formattedDate = moment(oneSpending.date).format('L'); //formatting the date to MM/DD/YYYY

    return (
        <div className="container pt-5 mt-5">
            <h1 class="text-center text-uppercase fw-bolder text-danger">{oneSpending.item}</h1>
            <Link to={`/`} className="btn btn-secondary mb-3">Home</Link>
            
            <div>
                <p className="text-info fw-bold">Quantity: {oneSpending.quantity}</p>
                <p className="text-info fw-bold">Location: {oneSpending.location}</p>
                <p className="text-info fw-bold">Date: {formattedDate}</p>
                <p className="text-info fw-bold">Price: ${oneSpending.price}</p>
            </div>

            <Link to = {`/spending/${oneSpending._id}/edit`} className="btn btn-primary me-3">Edit</Link>
            <button onClick = {deleteSpending} className="btn btn-danger">Delete</button>
        </div>
        
        )
}

export default OneSpending;