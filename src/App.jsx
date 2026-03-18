import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from './components/ProductList';
import FormSearchEmail from "./components/FormSearchEmail";

function App() {

  return (
    <>
      <Header />
      <h1>Exercices sur l'utilisation de useRef, useEffect, useMemo et useCallBack</h1>
      <main className="container">
        <FormSearchEmail />
        <ProductList />
      </main>
      <Footer />
    </>
  )
}

export default App
