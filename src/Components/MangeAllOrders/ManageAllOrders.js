import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [manageallorders, setManageallorders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            // fetch("https://frightening-spell-88460.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => setManageallorders(data));


    }, []);


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
                        <th>Action</th>
                    </tr>
                </thead>
                {manageallorders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.OrderName}</td>
                            <td>{pd?.userEmail}</td>
                            <td>{pd?.description}</td>
                            <button className="btn bg-warning">Delete</button>
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