import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ListEmployeePage from './pages/ListEmployeePage/ListEmployeePage';
import EmployeeActionPage from './pages/EmployeeActionPage/EmployeeActionPage';

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
        path: '/employee/add',
        exact: false,
        main: () => <EmployeeActionPage />
    },
    {
        path: '/employee/:id/edit',
        exact: false,
        main: ({match}) => <EmployeeActionPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
    
];

export default routes;