import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button, Table } from 'react-bootstrap';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h2>Your Orders: {orders.length} </h2>
            <ul>
                {orders.map(order => <li
                    key={order._id}
                >{order.OrderName} : {order.email}</li>)}
            </ul>

            <div className="container">
                <h1 className="text-danger"> Manage ALL Orders Here</h1>

                <h1 className="text-danger"> Total Orders: {orders?.length}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>OrderID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd?.OrderName}</td>
                                <td>{pd?.email}</td>
                                <td>{pd?.description}</td>
                                <button className="btn bg-warning">Delete</button>
                                {/* <button onClick={() => handleDeleteUser(myallbooking._id)}>X</button> */}
                            </tr>
                        </tbody>
                    ))}
                </Table>



            </div>
        </div>
    );
};

export default MyOrders;