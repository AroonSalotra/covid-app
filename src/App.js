// import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Data from './Data';
// import MapView from './Map';
import Footer from './Footer';
import Navbar from './Navbar';
import Background from './Background';

function App() {
  return (
    <div className="App">
      {/* <MapView /> */}
      <Background />
      <Navbar />
      <Data />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
