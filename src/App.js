//import { BrowserRouter } from 'react-router-dom';
import './App.css';
//import Product from './components/Product';
//import TTLT from './components/TTLT';
import CardList from './components/CardList';
import SubmitButton from './components/SubmitButton.js'
function App() {
  return (
    <div className="App">
      <CardList />
      <SubmitButton />
    </div>
    // <BrowserRouter>
    //   <Product />
    // </BrowserRouter>
  );
}

export default App;
