import './App.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Homecontent from './Components/Homecontent'
import Trending from './Components/Trending'
import Popular from './Components/PopularSpa'
import Banner from './Components/Banner'
import BestDeal from './Components/BestDeal.jsx'
import Middlesection from './Components/Middlesection';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homecontent/>
      <Middlesection/>
      <Trending/>
      <Popular/>
      <Banner/>
      <BestDeal/>
      <Footer/>

    </div>
  );
}

export default App;
