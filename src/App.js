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
import Debug from './Debug';
import Sort from './Sort';
import About from './About';

function App() {

  const [display, setDisplay] = useState("hide")
  const [value, setValue] = useState(null)


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
              value={value} setValue={setValue}
            />} />
          {/* <Route exact path="/test" element={<Test />} /> */}
          {/* <Route exact path="/debug" element={<Debug />}></Route> */}
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
          <Debug />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
