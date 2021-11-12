import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ConfirmOrder = () => {

    const { user } = useAuth();



    return (
        <div>
            <h2> Orders COnfirmed !!!</h2>

            <h3> Back to Home</h3>
            <h3> Back to ProductList</h3>

            <Link to='/home'>
                <Button variant="warning">Thank you {user.email} your Order is Confirmed</Button>
            </Link>
            <br />
            <br />
            <br />
            <Link to='/allproducts'>
                <Button variant="warning">Back to ProductList</Button>
            </Link>


        </div >
    );
};

export default ConfirmOrder;