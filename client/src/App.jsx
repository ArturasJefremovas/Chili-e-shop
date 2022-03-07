import Home from "./pages/home-page";
import Product from "./pages/product-page";
import Login from "./pages/Admin/login-page";
import Sauces from "./pages/sauces/sauces-page";
import Sets from "./pages/sets-page";
import Others from "./pages/others-page";
import Cart from "./pages/cart-page";
import Error from "./pages/error-page";
import Dashboard from "./pages/Admin/dashboard-page";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa'
    },
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sauces" element={<Sauces />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/others" element={<Others />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </ThemeProvider>

  );
};

export default App;

