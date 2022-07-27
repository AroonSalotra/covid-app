// import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Data from './Data';
// import MapView from './Map';
import Footer from './Footer';
import Navbar from './Navbar';
import Background from './Background';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <MapView /> */}
        <Background />
        <Navbar />
        <Routes>
          <Route exact path="covid-app" element={<Data />} />
          {/* <Route exact path="/test" element={<Test />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
