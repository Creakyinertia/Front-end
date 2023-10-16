import './App.css';
import { Provider } from 'react-redux';
import Expenses from './Components/Expenses';
import store2 from './Redux/Store2';


function App() {
  return (
    <Provider store={store2}>
    <div className="App">
      <Expenses></Expenses>
    </div>
    </Provider>
  );
}

export default App;
