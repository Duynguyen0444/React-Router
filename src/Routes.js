import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/Notfound';
import Product from './Components/Product';
import Login from './Components/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        //match là tham số đầu vào của react-router
        main: ({match, location}) => <Product match={match} location={location} />
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
    
    
];

export default routes;