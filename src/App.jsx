import { Route, Routes } from "react-router-dom" // Switch = Routes
import About from "./pages/About"
import Cart from "./pages/Cart"
import Home from "./pages/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} ></Route>
      <Route path="/about" exact element={<About />} ></Route>
      <Route path="/cart" exact element={<Cart />} ></Route>
    </Routes>
  )
}

export default App
