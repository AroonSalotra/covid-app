// import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Data from './Data';
// import MapView from './Map';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/* <MapView /> */}
      <Navbar />
      <Data />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
