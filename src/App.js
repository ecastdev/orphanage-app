
import './App.css';
import Navbar1 from './components/navbarr';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Navbar1/>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}
export default App;
