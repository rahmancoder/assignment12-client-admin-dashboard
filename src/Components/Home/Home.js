import React from 'react';
import AllReviewList from '../AllReviewList/AllReviewList';
import Banner from '../Banner/Banner';
import ProductList from '../ProductList/ProductList';

const Home = () => {
    return (
        <div>
            <h1>This is home </h1>
            <Banner></Banner>
            <ProductList></ProductList>
            <AllReviewList></AllReviewList>
        </div>
    );
};

export default Home;