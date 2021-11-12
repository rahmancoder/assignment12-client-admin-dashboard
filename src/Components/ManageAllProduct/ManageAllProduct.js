import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const ManageAllProduct = () => {
    const [manageallproducts, setManageallproducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            // fetch("https://frightening-spell-88460.herokuapp.com/booking")
            .then((res) => res.json())
            .then((data) => setManageallproducts(data));


    }, []);

    return (
        <div className="container">
            <h1 className="text-danger"> Manage ALL Drone Products</h1>

            <h1 className="text-danger"> Total Products: {manageallproducts?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ProductID</th>
                        <th>ProductName</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {manageallproducts?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.product_Name}</td>
                            <td>{pd?.product_description}</td>
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

export default ManageAllProduct;