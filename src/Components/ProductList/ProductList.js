import React, { useEffect, useState } from 'react';
import SingleProductList from '../SingleProductList/SingleProductList';

const ProductList = () => {

    const [productlist, setAllproductlist] = useState([]);
    useEffect(() => {
        // fetch('./mustafiztravel.json')
        fetch('http://localhost:5000/products')
            // fetch('https://frightening-spell-88460.herokuapp.com/travel')
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

export default ProductList;