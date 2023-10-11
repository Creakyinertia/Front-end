import './App.css';
import ContainerCake from './Components/ContainerCake';
import ContainerIceCream from './Components/ContainerIceCream';
import HookCakeContainer from './Components/HookCakeContainer';
import ItemContainer from './Components/ItemContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import Store from './REDUX/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
     <ItemContainer Cake />
     <ItemContainer IceCream />
     <ContainerCake/>
     <HookCakeContainer />
     <ContainerIceCream/>
     <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
