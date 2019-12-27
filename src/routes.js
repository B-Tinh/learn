import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ListEmployeePage from './pages/ListEmployeePage/ListEmployeePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/employee-list',
        exact: false,
        main: () => <ListEmployeePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
    
];

export default routes;