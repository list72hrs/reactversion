import React from "react";
    import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
    import Home from "./pages/Home";
    import SellerLogin from "./pages/SellerLogin";
    import SellerSignup from "./pages/SellerSignup";
    import SupplierLogin from "./pages/SupplierLogin";
    import SupplierSignup from "./pages/SupplierSignup";

    function App() {
      return (
        <Router>
          <nav className="p-4 bg-gray-800 text-white flex justify-between">
            <Link to="/" className="font-bold text-lg">List72</Link>
            <div>
              <Link to="/seller/login" className="mr-4">Seller Login</Link>
              <Link to="/supplier/login">Supplier Login</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/seller/signup" element={<SellerSignup />} />
            <Route path="/supplier/login" element={<SupplierLogin />} />
            <Route path="/supplier/signup" element={<SupplierSignup />} />
          </Routes>
        </Router>
      );
    }

    export default App;