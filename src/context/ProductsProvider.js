import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Context = createContext();

const ProductsProvider = (props) => {

  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      title: "Cat Tee Black T-Shirt",
      image: "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["S", "XS"],
      price: 10.9
    },

    {
      id: uuidv4(),
      title: "Dark Thug Blue-Navy T-Shirt",
      image: "https://images.pexels.com/photos/7562315/pexels-photo-7562315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["M"],
      price: 29.45
    },

    {
      id: uuidv4(),
      title: "Sphynx Tie Dye Wine T-Shirt",
      image: "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["X", "L", "XL"],
      price: 9.0
    },
    {
      id: uuidv4(),
      title: "Short Sleeve T-Shirt",
      image: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["XS", "X", "L", "ML", "XL"],
      price: 75.0
    },

    {
      id: uuidv4(),
      title: "Sphynx Tie Dye Grey T-Shirt",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["X", "L", "XL", "XXL"],
      price: 10.9
    },

    {
      id: uuidv4(),
      title: "Sphynx Tie Dye Grey T-Shirt",
      image: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["X", "L", "XL", "XXL"],
      price: 10.9
    },

    {
      id: uuidv4(),
      title: "Danger Knife Grey",
      image: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["X", "L"],
      price: 14.9
    },

    {
      id: uuidv4(),
      title: "Sphynx Tie Dye Grey T-Shirt",
      image: "https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["X", "L"],
      price: 14.9
    },

    {
      id: uuidv4(),
      title: "Short Sleeve T-Shirt",
      image: "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["XL"],
      price: 25.9
    },

    {
      id: uuidv4(),
      title: "Tso 3D Short Sleeve T-Shirt A",
      image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["X", "L", "XL"],
      price: 10.9
    },

    {
      id: uuidv4(),
      title: "Short Sleeve T-Shirt",
      image: "https://images.pexels.com/photos/7873111/pexels-photo-7873111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["XL", "XXL"],
      price: 49.9
    },

    {
      id: uuidv4(),
      title: "Crazy Monkey Black T-Shirt",
      image: "https://images.pexels.com/photos/670786/pexels-photo-670786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["S"],
      price: 22.5
    },

    {
      id: uuidv4(),
      title: "Short Sleeve T-Shirt",
      image: "https://images.pexels.com/photos/6315112/pexels-photo-6315112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["XL"],
      price: 18.7
    },

    {
      id: uuidv4(),
      title: "Crazy Monkey Grey",
      image: "https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["L", "XL"],
      price: 134.9
    },

    {
      id: uuidv4(),
      title: "On The Streets Black T-Shirt",
      image: "https://images.pexels.com/photos/7706424/pexels-photo-7706424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      availableSizes: ["L", "XL"],
      price: 49.0
    }
  ])

  const [basket, setBudget] = useState([]);

  const [totalCount, setTotalCount] = useState(0);

  const [isOpen, setIsOpen] = useState(true);


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
      totalCount,
      isOpen,
      addBasket,
      deleteBasket,
      filterProducts,
      togglerDrawer
    }}>

      {props.children}

    </Context.Provider>
  )
}

export default ProductsProvider;
