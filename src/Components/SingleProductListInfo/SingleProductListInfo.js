import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SingleProductListInfo = () => {

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
        <div className="text-center">
            <h2 className="text-danger">Product Index: {productId}</h2>

            <h2 className="text-success">Product Name: {productdetails[productId]?.product_Name
            }</h2>
            <h2 className="text-warning">About this Product- {productdetails[productId]?.product_description}</h2>
            <img src={productdetails[productId]?.picture} alt="" />

            <div className="mt-3">
                <Link to='/confirmorder'>
                    <Button variant="warning">Confirm your Orders?</Button>
                </Link>
            </div>

            <div className="text-center">
                <h1> Drone Product List</h1>
                <p>Want to Buy Drone  Now?</p>
                <p><Link to="/products">View All ProductList</Link></p>

            </div>


        </div>
    );
};

export default SingleProductListInfo;