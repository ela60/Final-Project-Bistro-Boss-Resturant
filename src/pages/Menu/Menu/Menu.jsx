import React from 'react';
import { Helmet }
from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import Popularmenu from '../../Home/PopularMenu/Popularmenu';

const Menu = () => {
    return (
        <div>
            <Helmet >
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our menu"}></Cover>
            <Popularmenu/>
        </div>
    );
};

export default Menu;