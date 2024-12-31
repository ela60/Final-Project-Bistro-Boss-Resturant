import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Category/Categories';
import Popularmenu from '../PopularMenu/Popularmenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Popularmenu />
            <Featured />
            <Testimonials/>
        </div>
    );
};

export default Home;