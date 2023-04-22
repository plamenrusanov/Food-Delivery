import { useState } from "react";

import { useShoppingCart } from "./hooks/useShoppingCart";
import { AuthContext } from "./contexts/AuthContext";
import { ShoppingCartContext } from "./contexts/ShoppingCartContext";
import { logout } from "./services/authService";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [user, setUser] = useState({});
  let isFirstRender = true;
  
  function updateUser(value) {
    setUser(value);
  }

  function onLogout() {
    if(isFirstRender){
      isFirstRender = false;
      try {
        logout(user?.accessToken);
      } catch (error) {
        console.log(error);
      }
      
      updateUser({});
    }
  }

  const admin = "admin@admin.com";
  const contextValues = {
    onLogout,
    updateUser,
    userId: user._id,
    token: user.accessToken,
    userEmail: user.email,
    userName: user.username,
    isAuthenticated: !!user.accessToken,
    isAdmin: user.email === admin,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      <ShoppingCartContext.Provider value={useShoppingCart()}>
        <Header />
        <Main />
        <Footer />
      </ShoppingCartContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
