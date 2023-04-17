import './App.css';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import QuantityPicker from './components/quantityPicker';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <div className='container-fluid'>
      <Catalog/>
        </div>
      
      <Footer/>
    </div>
  );
}

export default App;
