import Banner from './Banner';
import { Header } from './Header';
import { Footer } from './Footer'
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {

  const featuresItem = [{
    title: "Product",
    description: "Explore our products",
  }, {
    title: "Price",
    description: "Explore our price",
  }, {
    title: "Contact",
    description: "Contact us",
  }, {
    title: "About",
    description: "About us",
  },
  {
    title: "Careers",
    description: "Join our Team",
  },
  {
    title: "Privacy Policy",
    description: "Know our Privacy Policy",
  }
  ]

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Banner featuresItem={featuresItem}/>
      <Footer />
    </div>
  );
}

export default App;
