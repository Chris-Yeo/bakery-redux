import { initialProducts } from './buyProductReducer'

const initialBalance = {
    balance: 0
}

const balanceReducer = (state = initialBalance, action) => {
    if(action.type === 'BUY_CROISSANT'){
        const newState = {
            balance: state.balance + initialProducts.croissant.price
        }
        return newState
    } else if (action.type === 'BUY_FRUIT_TART'){
        const newState = {
            balance: state.balance + initialProducts.fruit_tart.price
        }
        return newState
    } else if (action.type === 'BUY_MUFFIN') {
        const newState = {
            balance: state.balance + initialProducts.muffin.price
        }
        return newState
    } else if (action.type === 'BUY_PIE'){
        const newState = {
            balance: state.balance + initialProducts.pie.price
        }
        return newState
    }
    else if (action.type === 'BUY_SHORTCAKE'){
        const newState = {
            balance: state.balance + initialProducts.shortcake.price
        }
        return newState
    }
    else if (action.type === 'BUY_MACAROON'){
        const newState = {
            balance: state.balance + initialProducts.macaroon.price
        }
        return newState
    }
    else if (action.type === 'BUY_FRUITCAKE'){
        const newState = {
            balance: state.balance + initialProducts.fruitcake.price
        }
        return newState
    }
    else if (action.type === 'BUY_RAINBOW'){
        const newState = {
            balance: state.balance + initialProducts.rainbow.price
        }
        return newState
    }
    return state;
}

export default balanceReducer