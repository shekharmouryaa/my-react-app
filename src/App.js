import MainContainer from './MainContainer';
import { Header } from './Header';
import { Footer } from './Footer'
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <MainContainer/>
      <Footer />
    </div>
  );
}

export default App;
