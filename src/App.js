import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home/Home";
import Navigation from "./components/routes/Navigation/Navigation";
import Authentication from "./components/routes/Authentication/Authentication";
import Shop from "./components/routes/Shop/shop";
import Checkout from "./components/routes/Checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
