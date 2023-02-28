import './App.css';
import PersonForm from './PersonForm';
import PersonData from './PersonData';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  //show demoraphic form
  return (

    <div className="App">
      <Provider store={store}>
        <PersonForm />
        <PersonData />
      </Provider>

    </div>
  );




}

export default App;
