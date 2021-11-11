import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import './AddReviews.css'

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
            // axios.post('https://frightening-spell-88460.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h1>THis is Review Page people can give their review here</h1>
            <div>
                <h3 className="text-warning">Let's Add a Review Here!!</h3>


                <div className="add-review">
                    <h2 className="text-warning">Please Add a Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ height: '10vh' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Product Review Name" />
                        <textarea style={{ height: '10vh' }} {...register("description")} placeholder="Review Information" />
                        <input style={{ height: '5vh' }} type="number" {...register("price")} placeholder="Review price" />
                        <input style={{ height: '5vh' }} {...register("img")} placeholder="review product image url" />
                        <input type="submit" />
                    </form>
                </div>
                <Button className="mx-2" variant="info"> <Link className="m-2 text-decoration-none text-light" to="/admin">AdminDashboard</Link></Button>


            </div>
        </div>
    );
};

export default AddReviews;