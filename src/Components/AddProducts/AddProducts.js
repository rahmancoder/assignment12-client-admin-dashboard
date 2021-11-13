import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import './AddProducts.css';

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        // axios.post('http://localhost:5000/products', data)
        axios.post('https://sheltered-shelf-37326.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h3 className="text-danger"> Add A NEW Product Drone  LIST</h3>


            <div className="add-product">
                <h2 className="text-danger">Please Add a New Product List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ height: '10vh' }} {...register("product_Name", { required: true, maxLength: 20 })} placeholder="Add Drone Product Name" />
                    <textarea style={{ height: '10vh' }} {...register("product_description")} placeholder="Product Descripsion" />
                    <input style={{ height: '5vh' }} type="number" {...register("product_cost")} placeholder="Product Cost" />
                    <input style={{ height: '5vh' }} {...register("picture")} placeholder="Product image url" />
                    <input style={{ height: '5vh' }} type="number"{...register("index")} placeholder="Product image url" defaultValue="20" />
                    <input style={{ height: '5vh' }} {...register("status")} defaultValue="pending" />
                    <input type="submit" />
                </form>
            </div>
            <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/dashboard">AdminDashboard</Link></Button>


        </div>
    );
};

export default AddProducts;