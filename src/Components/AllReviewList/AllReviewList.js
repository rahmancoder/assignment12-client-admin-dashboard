import React, { useEffect, useState } from 'react';
import SingleReviewList from '../SingleReviewList/SingleReviewList';

const AllReviewList = () => {
    const [allreviewlist, setAllreviewlist] = useState([]);
    useEffect(() => {

        // fetch('http://localhost:5000/allreviews')
        fetch('https://sheltered-shelf-37326.herokuapp.com/allreviews')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllreviewlist(data));

    }, [])

    return (
        <div className="text-center container mt-4">

            <div className="text-center">
                <h1 className="text-danger mt-5"> User ReviewS </h1>
                <p className="mb-4">Our Product Reviews!</p>

                <div className="row m-3">

                    {
                        // travellist.slice(0, 9).map(travel =>
                        allreviewlist.map(review =>
                            <SingleReviewList
                                key={review.id}
                                review={review}

                            ></SingleReviewList>

                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default AllReviewList;