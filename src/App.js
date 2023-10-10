import './App.css';
import ContainerCake from './Components/ContainerCake';
import ContainerIceCream from './Components/ContainerIceCream';
import HookCakeContainer from './Components/HookCakeContainer';
import Store from './REDUX/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
     <ContainerCake/>
     <HookCakeContainer />
     <ContainerIceCream/>
    </div>
    </Provider>
  );
}

export default App;
