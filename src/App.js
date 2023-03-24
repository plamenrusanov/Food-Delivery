import { useState } from "react";

import { AuthContext } from './contexts/AuthContext';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  const [user, setUser] = useState({});

  const contextValues = {
    setUser,
    userId: user._id,
    token: user.accessToken,
    userEmail: user.email,
    userName: user.username,
    isAuthenticated: !!user.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      <Header />
      <Main />
    </AuthContext.Provider>
  );
}

export default App;
