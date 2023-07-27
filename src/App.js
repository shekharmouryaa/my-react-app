import Banner from './Banner';
import { Header } from './Header';
import { Footer } from './Footer'
import { Card } from './Card';
import './App.css'

function App() {

  const titles = ["Product", "Price", "Explore","Gallery", "Service", "Contact"]
  

  return (
    <div className="App">
      <Header />
      <Banner />
      <div className='row row-cols-1 row-cols-md-3 mx-5'>
        {titles.map((item, index) => (
          <Card key={index} title={item}/>
        ))}
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
