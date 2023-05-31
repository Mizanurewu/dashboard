// use local storage to manage cart data
const addToDb = (id, data) => {
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = storedCart ? JSON.parse(storedCart) : [];

    shoppingCart.push(data);
    console.log(shoppingCart);
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};


const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const updateInDb = (data) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        let shoppingCart = JSON.parse(storedCart);
        const index = shoppingCart.findIndex(item => item.id === data.id);
        if (index !== -1) {
            shoppingCart[index] = data;
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
};

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        let shoppingCart = JSON.parse(storedCart);
        shoppingCart = shoppingCart.filter(item => item.id !== id);
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
};



const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    getStoredCart,
    updateInDb,
    removeFromDb,
    deleteShoppingCart
}