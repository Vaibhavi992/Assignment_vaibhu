import React, { Suspense,lazy } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

// Lazily loaded components
const Home = lazy(() => delayForDemo(import('./Pages/Home')));
const Product = lazy(() => delayForDemo(import('./Pages/Product')));


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* Route for the Home page */}
          <Route
            index path="/" element={<><Header />

              <div className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "85vh" }} >
                <Suspense
                  fallback={
                    <>
                      <div class="text-center">
                        <div class="spinner-border text-danger" role="status">
                          <span class="sr-only"></span>
                        </div>
                      </div>
                    </>
                  }
                >
                  <Home />
                </Suspense>
              </div>
              <Footer />
            </>
            }
          ></Route>
          <Route
            path="/product"
            element={
              <>
                <Header />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{ minHeight: "85vh" }}
                >
                  <Suspense
                    fallback={
                      <>
                        <div class="text-center">
                          <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </>
                    }
                  >

                    <Product />
                  </Suspense>
                </div>

                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App