import { combineReducers } from 'redux';
import employees from './listEmployeesReducer';

const rootReducer = combineReducers({
    employees,
});

export default rootReducer; 