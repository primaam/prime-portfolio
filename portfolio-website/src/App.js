import './App.css';
import Component from './component/Component';
import ScrollService from "./utilities/scrollService";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Component />
    </div>
  );
}

export default App;
