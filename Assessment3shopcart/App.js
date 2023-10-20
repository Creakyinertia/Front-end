import './App.css';
import store from './Redux/store';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import HomePage from './Components/HomePage';


function App() {
  return (
    <Provider store={store}>
     <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='Checkout' element={<Checkout/>}></Route>
    
    </Routes>
    </Provider>
  );
}

export default App;
