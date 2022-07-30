// import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Data from './Data';
// import MapView from './Map';
import Footer from './Footer';
import Navbar from './Navbar';
import Background from './Background';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState("hide")

  return (
    <BrowserRouter>
      <div className="App">
        {/* <MapView /> */}
        <Background />
        <Navbar />
        <Routes>
          <Route exact path="covid-app" element={
            <Data
              display={display} setDisplay={setDisplay}
            />} />
          {/* <Route exact path="/test" element={<Test />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
