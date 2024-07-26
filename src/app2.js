
import './App.css';
import Header from './components/header';
import Ouractivity from './components/ouractivity';
import OurMission from './components/mission';
import Footer1 from './components/footer';
import OurGallery from './components/ourGallery/ourgallery';
import About from './components/about';


function App2() {
  return (
    
      <div className='flex flex-col items-center'>
          
              <Header/>
              <Ouractivity/>
              <OurMission/>
              <OurGallery/>
              <About/>
              <Footer1/>
          
          
      </div>
     
 


    
  );
}
export default App2;
