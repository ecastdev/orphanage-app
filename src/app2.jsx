
import './App.css';
import Header from './components/header';
import Ouractivity from './components/ouractivity';
import OurMission from './components/mission';
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


          
      </div>





  );
}
export default App2;
