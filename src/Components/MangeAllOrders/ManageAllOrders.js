import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageAllOrders = () => {
    const [manageallorders, setManageallorders] = useState([]);


    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            // fetch("https://frightening-spell-88460.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => setManageallorders(data));


    }, []);


    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`http://localhost:5000/statusupdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };



    return (
        <div className="container">
            <h1 className="text-danger"> Manage ALL Orders Here</h1>

            <h1 className="text-danger"> Total Orders: {manageallorders?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {manageallorders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.OrderName}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.description}</td>

                            {/* <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(pd?._id)}
                                        {...register("status")}
                                    >
                                        <option value={pd?.status}>{pd?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input type="submit" />
                                </form>
                            </td> */}
                            <td> {pd?.status}
                                <select >
                                    <option value={pd?.status}>pending</option>
                                    <option value="approve">approve</option>
                                    <option value="reject">reject</option>
                                </select>
                                <br />
                                <input className="bg-primary text-light" type="submit" />
                            </td>
                            <td><button className="btn bg-warning">Delete</button></td>
                            {/* <button onClick={() => handleDeleteUser(myallbooking._id)}>X</button> */}
                        </tr>
                    </tbody>
                ))}
            </Table>




            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/home">Back to Home</Link></Button>

        </div>
    );
};

export default ManageAllOrders;