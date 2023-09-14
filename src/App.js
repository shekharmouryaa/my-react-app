import MainContainer from './MainContainer';
import { Header } from './Header';
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <MainContainer/>
    </div>
  );
}

export default App;
