import "./index.css"
import React from "react"
import Nav from "./components/nav/nav"
import CartNavigation from "./components/sidecart/cartnavigation"
import Grid from "./components/itemcards/grid"
import { CartProvider} from "react-use-cart"
function App() {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState([])
  const [cartNav, setCartNav] = React.useState(false)

  

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
              setData(json)
              setLoading(false)
            })
  }, [])


  const toggleCart = () => {
    setCartNav(prev => !prev)
  }


  return (
    <CartProvider className="App">
      <Nav
        toggleCart = {toggleCart}
      />
      <CartNavigation
        cartNav = {cartNav}
      />
      <Grid 
        data = {data}
        loading = {loading}
      />
    </CartProvider>
  );
}

export default App;
