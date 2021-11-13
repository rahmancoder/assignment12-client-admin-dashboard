import React from 'react';
import AllReviewList from '../AllReviewList/AllReviewList';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import ProductList from '../ProductList/ProductList';

const Home = () => {
    return (
        <div>
            <h1 className="bg-warning text-white">Explore Bangladesh Best Drone Products </h1>
            <Banner></Banner>
            <ProductList></ProductList>
            <AllReviewList></AllReviewList>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;