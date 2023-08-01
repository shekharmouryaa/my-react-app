import Banner from './Banner';
import { Header } from './Header';
import { Footer } from './Footer'
import { Card } from './Card';
import './App.css'

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
      <Header />
      <Banner />

      <Footer />
    </div>
  );
}

export default App;
