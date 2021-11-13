import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const ManageAllProduct = () => {
    const [manageallproducts, setManageallproducts] = useState([]);

    const [adminproducts, setAdminproducts] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:5000/products")
        fetch("https://sheltered-shelf-37326.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setManageallproducts(data));


    }, []);


    // DELETE Products
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            // const url = `http://localhost:5000/products/${id}`;
            const url = `https://sheltered-shelf-37326.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // if (data.deletedCount > 0) {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        const remainingproducts = adminproducts.filter(data => data._id !== id);
                        setAdminproducts(remainingproducts);
                    }
                });
        }
    }


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
                            {/* <button className="btn bg-warning">Delete</button> */}
                            <td><button className="btn bg-warning" onClick={() => handleDeleteOrder(pd?._id)}>DELETE</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>




            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/home">Back to Home</Link></Button>

        </div>
    );
};

export default ManageAllProduct;