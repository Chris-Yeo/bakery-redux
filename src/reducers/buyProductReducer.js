export const initialProducts = {
    croissant: {
        stock: 30,
        price: 28000
    },
    fruit_tart: {
        stock: 30,
        price: 48000
    },
    muffin: {
        stock: 30,
        price: 25000
    },
    pie: {
        stock: 30,
        price: 35000
    },
    shortcake: {
        stock: 30,
        price: 50000
    },
    rainbow: {
        stock: 30,
        price: 36000
    },
    macaroon: {
        stock: 30,
        price: 20000
    },
    fruitcake: {
        stock: 30,
        price: 27000
    }
}

const buyProductReducer = (state = initialProducts, action) => {
    if(action.type === 'BUY_CROISSANT'){
        const newState = {
            croissant: {
                stock: state.croissant.stock - 1
            },
            fruit_tart: {
                stock: state.fruit_tart.stock
            },
            muffin: {
                stock: state.muffin.stock
            },
            pie: {
                stock: state.pie.stock
            },
            shortcake: {
                stock: state.shortcake.stock
            },
            fruitcake: {
                stock: state.fruitcake.stock
            },
            macaroon: {
                stock: state.macaroon.stock
            },
            rainbow: {
                stock: state.rainbow.stock
            }
            
        }
        return newState
    } else if (action.type === 'BUY_FRUIT_TART') {
        const newState = {
            croissant: {
                stock: state.croissant.stock
            },
            fruit_tart: {
                stock: state.fruit_tart.stock - 1
            },
            muffin: {
                stock: state.muffin.stock
            },
            pie: {
                stock: state.pie.stock
            },
            shortcake: {
                stock: state.shortcake.stock
            },
            fruitcake: {
                stock: state.fruitcake.stock
            },
            macaroon: {
                stock: state.macaroon.stock
            },
            rainbow: {
                stock: state.rainbow.stock
            }
        }
        return newState
    } else if (action.type === 'BUY_MUFFIN') {
        const newState = {
            croissant: {
                stock: state.croissant.stock
            },
            fruit_tart: {
                stock: state.fruit_tart.stock
            },
            muffin: {
                stock: state.muffin.stock - 1
            },
            pie: {
                stock: state.pie.stock
            },
            shortcake: {
                stock: state.shortcake.stock
            },
            fruitcake: {
                stock: state.fruitcake.stock
            },
            macaroon: {
                stock: state.macaroon.stock
            },
            rainbow: {
                stock: state.rainbow.stock
            }
        }
        return newState
    } else if(action.type === 'BUY_PIE') {
        const newState = {
            croissant: {
                stock: state.croissant.stock
            },
            fruit_tart: {
                stock: state.fruit_tart.stock
            },
            muffin: {
                stock: state.muffin.stock
            },
            pie: {
                stock: state.pie.stock - 1
            },
            shortcake: {
                stock: state.shortcake.stock
            },
            fruitcake: {
                stock: state.fruitcake.stock
            },
            macaroon: {
                stock: state.macaroon.stock
            },
            rainbow: {
                stock: state.rainbow.stock
            }
        }
        return newState
    }
    else if(action.type === 'BUY_SHORTCAKE') {
        const newState = {
            croissant: {
                stock: state.croissant.stock
            },
            fruit_tart: {
                stock: state.fruit_tart.stock
            },
            muffin: {
                stock: state.muffin.stock
            },
            pie: {
                stock: state.pie.stock
            },
            shortcake: {
                stock: state.shortcake.stock - 1
            },
            fruitcake: {
                stock: state.fruitcake.stock
            },
            macaroon: {
                stock: state.macaroon.stock
            },
            rainbow: {
                stock: state.rainbow.stock
            }
        }
        return newState
    }
    else if(action.type === 'BUY_FRUITCAKE') {
        const newState = {
            croissant: {
                stock: state.croissant.stock
            },
            fruit_tart: {
                stock: state.fruit_tart.stock
            },
            muffin: {
                stock: state.muffin.stock
            },
            pie: {
                stock: state.pie.stock
            },
            shortcake: {
                stock: state.shortcake.stock
            },
            fruitcake: {
                stock: state.fruitcake.stock - 1
            },
            macaroon: {
                stock: state.macaroon.stock
            },
            rainbow: {
                stock: state.rainbow.stock
            }
        }
        return newState
    }
    else if(action.type === 'BUY_MACAROON') {
        const newState = {
            croissant: {
                stock: state.croissant.stock
            },
            fruit_tart: {
                stock: state.fruit_tart.stock
            },
            muffin: {
                stock: state.muffin.stock
            },
            pie: {
                stock: state.pie.stock
            },
            shortcake: {
                stock: state.shortcake.stock
            },
            fruitcake: {
                stock: state.fruitcake.stock
            },
            macaroon: {
                stock: state.macaroon.stock - 1
            },
            rainbow: {
                stock: state.rainbow.stock
            }
        }
        return newState
    }
    else if(action.type === 'BUY_RAINBOW') {
        const newState = {
            croissant: {
                stock: state.croissant.stock
            },
            fruit_tart: {
                stock: state.fruit_tart.stock
            },
            muffin: {
                stock: state.muffin.stock
            },
            pie: {
                stock: state.pie.stock
            },
            shortcake: {
                stock: state.shortcake.stock
            },
            fruitcake: {
                stock: state.fruitcake.stock
            },
            macaroon: {
                stock: state.macaroon.stock
            },
            rainbow: {
                stock: state.rainbow.stock - 1
            }
        }
        return newState
    }
    return state;
}

export default buyProductReducer