import ProductsProvider from './context/ProductsProvider';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Buy from './components/Buy';
import Github from './components/Github';

const App = () => {
  return (

    <ProductsProvider>
      <Github />
      <div className="container">
        <section className="main">
          <Header />
          <ProductsList />
        </section>
      </div>
      <Buy />
    </ProductsProvider>

  );
}

export default App;
