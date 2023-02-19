import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateSpending = () => {

    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();


        axios.post("http://localhost:8000/api/spending/new", {
            item,
            quantity,
            location,
            date,
            price
        })
        .then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }



    return (
        <div className="container pt-5 mt-5">
            <h1 class="text-center text-uppercase fw-bolder text-danger">Add Your Spending</h1>
            <p><Link to = {`/`} className="btn btn-secondary mb-3">Home</Link></p>

            <form onSubmit={onSubmitHandler}>
                <div className="column" align="center">
                    <div className="col-md-6 mb-3">
                        <label className="form-label text-info fw-bold">Item:</label>
                        <input type="text" value={item} name="item" onChange={e => setItem(e.target.value)}/>
                        {errors.item ? <p className="text-white">{errors.item.message}</p>:null}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label text-info fw-bold">Quantity:</label>
                        <input type="number" value={quantity} name="quantity" onChange={e => setQuantity(e.target.value)}/>
                        {errors.quantity ? <p className="text-white">{errors.quantity.message}</p>:null}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label text-info fw-bold">Location:</label>
                        <input type="text" value={location} name="location" onChange={e => setLocation(e.target.value)}/>
                        {errors.location ? <p className="text-white">{errors.location.message}</p>:null}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label text-info fw-bold">Date:</label>
                        <input type="date" value={date} name="date" onChange={e => setDate(e.target.value)}/>
                        {errors.date ? <p className="text-white">{errors.date.message}</p>:null}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label text-info fw-bold">Price: $ </label>
                        <input type="number" value={price} name="price" onChange={e => setPrice(e.target.value)}/>
                        {errors.price ? <p className="text-white">{errors.price.message}</p>:null}
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
)
}

export default CreateSpending;