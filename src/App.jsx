import Header from "./components/Header";
import Footer from "./components/Footer";
import FormSearch from "./components/FormSearch";
import ProductList from './components/ProductList';

function App() {

  return (
    <>
      <Header />
      <h1>Exercices sur l'utilisation de useRef, useEffect, useMemo et useCallBack</h1>
      <main className="container">
        <FormSearch />
        <ProductList />
      </main>
      <Footer />
    </>
  )
}

export default App
