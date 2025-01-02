import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Category/Categories';
import Popularmenu from '../PopularMenu/Popularmenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Categories />
            <Popularmenu />
            <Featured />
            <Testimonials/>
        </div>
    );
};

export default Home;