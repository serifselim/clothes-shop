import React,{ useState, useEffect, createContext } from 'react';

export const Context = createContext();

const ProductsProvider = (props) => {


  // Get Local Data Func
  const getLocalData = (value,type) => {
    let data = JSON.parse(localStorage.getItem(value));
    return data !== null ? data : type;
  }

  // Hooks
  const [products, setProducts]= useState(() => {
    let data = require('../data/products.json');
    return data.product;
  });

  const [favorites,setFavorites] = useState(getLocalData("favorites",[]));

  const [basket, setBudget] = useState(getLocalData("basket",[]));

  const [totalCount, setTotalCount] = useState(getLocalData("totalCount",0));

  const [isOpen, setIsOpen] = useState(true);

  // Listening Favorites
  useEffect(() => {
    localStorage.setItem("favorites",JSON.stringify(favorites));
  }, [favorites])

  // Listening Basket
  useEffect(() => {
    localStorage.setItem("basket",JSON.stringify(basket));
  }, [basket])

  // Listening Price
  useEffect(() => {
    localStorage.setItem("totalCount",JSON.stringify(totalCount));
  },[totalCount])

  // Add Item Func
  const addBasket = (product) => {
    setBudget(prevState => [...prevState, product]);
    setTotalCount(prevCount => prevCount += product.price);
    setIsOpen(false);
  }

  // Delete Item Func
  const deleteBasket = (id, price) => {
    setTotalCount(prevCount => prevCount -= price);
    setBudget(prevBasket => prevBasket.filter(element => element.id !== id));
  }

  // Add Your Favorites
  const addFavorite = (product) => {
    setFavorites(prevState => [...prevState, product]);
  }

  // Delete Your Favorite
  const deleteFavorite = (id) => {
    setFavorites(prevState => prevState.filter(element => element.id !== id));
  }

  // Filter Products Func
  const filterProducts = (value) => {
    value === "lowest" ? setProducts(prevProducts => [...prevProducts].sort((a, b) => a.price - b.price))
      : setProducts(prevProducts => [...prevProducts].sort((a, b) => b.price - a.price))
  }

  // Open-Close Basket Func
  const togglerDrawer = () => setIsOpen(prevState => !prevState);

  return (
    <Context.Provider value={{
      products,
      basket,
      favorites,
      totalCount,
      isOpen,
      addBasket,
      deleteBasket,
      addFavorite,
      deleteFavorite,
      filterProducts,
      togglerDrawer
    }}>

      {props.children}

    </Context.Provider>
  )
}

export default ProductsProvider;
