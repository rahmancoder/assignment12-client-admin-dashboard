import React, { useEffect, useState } from 'react';
import SingleProductList from '../SingleProductList/SingleProductList';

const ExploreProductList = () => {
    const [productlist, setAllproductlist] = useState([]);
    useEffect(() => {

        // fetch('http://localhost:5000/products')
        fetch('https://sheltered-shelf-37326.herokuapp.com/products')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAllproductlist(data));

    }, [])


    return (
        <div className="text-center container mt-4">

            <div className="text-center">
                <h1 className="text-danger"> Choose your Drone Product List</h1>
                <p>Want to Buy Drone? Order Now!</p>

                <div className="row m-3">

                    {
                        // travellist.slice(0, 9).map(travel =>
                        productlist.map(product =>
                            <SingleProductList
                                key={product.index}
                                product={product}

                            ></SingleProductList>

                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default ExploreProductList;