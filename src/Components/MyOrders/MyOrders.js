import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button, Table } from 'react-bootstrap';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();


    const [myallorders, setMyallorders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            // fetch("https://frightening-spell-88460.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => setMyallorders(data));
        // .then((data) => {
        //     setMyallorders(data)
        //     const found = myallorders.filter(d => d.userEmail == user?.email)
        //     console.log('found', found);
        // });


    }, []);


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])



    // DELETE A Privious My Booking
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            // const url = `http://localhost:5000/mybooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // if (data.deletedCount > 0) {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        const remainingbooking = myallorders.filter(data => data._id !== id);
                        setMyallorders(remainingbooking);
                    }
                });
        }
    }
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
                                {/* <button className="btn bg-warning">Delete</button> */}
                                {/* <button onClick={() => handleDeleteUser(myallorders._id)}>X</button> */}
                                <button onClick={() => handleDeleteUser(pd?._id)}>X</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>



            </div>
        </div>
    );
};

export default MyOrders;