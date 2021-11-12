import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProductList = (props) => {
    const { index, picture, product_Name, product_cost } = props.product || {};
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span className="text-warning"> Product Name-</span> {product_Name}</Card.Title>
                    <Card.Text>


                        {/* <span className="text-info"> About Product:-</span> : {about} */}
                    </Card.Text>
                    <Card.Title><span className="text-danger font-weight-bold"> Price-</span> {product_cost} $</Card.Title>
                    <Link to={`/productorder/${index}`}>
                        <Button variant="info">Add to Order</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleProductList;