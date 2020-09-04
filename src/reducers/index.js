import { combineReducers } from 'redux'

import buyProductReducer from './buyProductReducer';
import balanceReducer from './balanceReducer';

const rootReducer = combineReducers({
    products: buyProductReducer,
    balance: balanceReducer
})

export default rootReducer