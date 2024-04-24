import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Populer from "./components/populermovies";
import Details from "./components/details.js";
import "./components/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path=""
            element={
              <>
                <Header />
                <Populer />
              </>
            }
          />
          <Route path="/details/:title/:dis" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
