import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './SingleProductListInfo.css';

const SingleProductListInfo = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        // axios.post('/mustafiztravel.json', data)
        axios.post('http://localhost:5000/orders', data)
            // axios.post('https://frightening-spell-88460.herokuapp.com/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert(' Order added successfully');
                    reset();
                }
            })
    }

    let { productId } = useParams();
    const [productdetails, setProductDetails] = useState([]);

    useEffect(() => {
        // fetch('/mustafiztravel.json')
        fetch('http://localhost:5000/products')
            // fetch('https://frightening-spell-88460.herokuapp.com/travel')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProductDetails(data))

    }, [])

    useEffect(() => {

        const found = productdetails.find(d => d.index == productId)
        // const found = productdetails.find(d => d._id == productId)
        console.log('found', found);


    }, [productdetails, productId])

    return (
        <div className=" custom-display">
            <div className="text-center half-width  ">
                <h2 className="text-danger">Product Index: {productId}</h2>

                <h2 className="text-success">Product Name: {productdetails[productId]?.product_Name
                }</h2>
                <h2 className="text-warning">About this Product- {productdetails[productId]?.product_description}</h2>
                <img style={{ width: '50%' }} src={productdetails[productId]?.picture} alt="" />

                <div className="mt-3">
                    {/* <Link to='/confirmorder'> */}
                    <Button variant="warning">Confirm your Orders? Please Submit</Button>
                    {/* </Link> */}
                </div>

                <div className="text-center">
                    <h1> Drone Product List</h1>
                    <p>Want to Buy Drone  Now?</p>
                    <p><Link to="/products">View All ProductList</Link></p>

                </div>




            </div>


            {/* confirm booking page here */}
            <div className="add-order half-width mt-5 ">
                <h2>Please Confirm Your Order</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ height: '10vh' }} {...register("OrderName", { required: true })} defaultValue={productdetails[productId]?.product_Name} />
                    <textarea style={{ height: '10vh' }} {...register("description")} placeholder="Product Description" />
                    <input style={{ height: '5vh' }}  {...register("price")} defaultValue={productdetails[productId]?.product_cost} />
                    <input style={{ height: '5vh' }} {...register("userEmail")} placeholder="User Email" defaultValue={user?.email} />
                    <input className="bg-success text-light" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default SingleProductListInfo;