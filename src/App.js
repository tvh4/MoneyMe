import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    // <div className="App">
    //   <Product />
    // </div>
    <BrowserRouter>
      <Product />
    </BrowserRouter>
  );
}

export default App;
