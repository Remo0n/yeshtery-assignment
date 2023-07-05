import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import { useState, useEffect } from "react";
import PreLoading from "./pages/PreLoading";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulating a delay to showcase the loading screen
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <PreLoading />;
  }
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Provider>
  );
}

export default App;
