import { useState } from "react";


import { useShoppingCart } from './hooks/useShoppingCart';
import { AuthContext } from "./contexts/AuthContext";
import { ShoppingCartContext } from "./contexts/ShoppingCartContext";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  const [user, setUser] = useState({});
  
  const admin = "admin@admin.com";
  const contextValues = {
    setUser,
    userId: user._id,
    token: user.accessToken,
    userEmail: user.email,
    userName: user.username,
    isAuthenticated: !!user.accessToken,
    isAdmin: user.email === admin
  };

  return (
      <AuthContext.Provider value={contextValues}>
        <ShoppingCartContext.Provider value={useShoppingCart()}>
        <Header />
        <Main />
        </ShoppingCartContext.Provider>
      </AuthContext.Provider>
  );
}

export default App;
