import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DisplayAll = () => {
    const  [spendingList, setSpendingList] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/spending")
            .then((res) =>{
                console.log(res)
                console.log(res.data)
                setSpendingList(res.data);
            })
            .catch((err) => console.log(err.res))
    }, []);

    const initialSpending = 0
    const totalSpending = spendingList.reduce((accumulator, spending) => accumulator + spending.price, initialSpending)
    
    return (
            <div>
                <div className="container pt-5">
                    <h1 className="text-center text-uppercase fw-bolder text-danger">Your Personal Spending Tracker</h1>
                    <p><Link to = {`/spending/new`} className="btn btn-primary">Add A Spending</Link></p>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className='text-info'>
                                <tr>
                                    <th >Spending</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {spendingList.map((spending, index) => {
                                    return (
                                        <tr key = {spending.id} className="text-warning">
                                            <td>{spending.item}</td>
                                            <td>${spending.price}</td>
                                            <td>
                                                <Link to = {`/spending/${spending._id}`} className="btn btn-secondary me-2">Details</Link>
                                                <Link to = {`/spending/${spending._id}/edit`} className="btn btn-primary">Edit</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p className="fw-bold text-success fs-4">Your Total Spending So Far: ${totalSpending}</p>
                    </div>
                </div>
            </div>
    )

}

export default DisplayAll;