// import { FacebookRounded, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
import logos from './assests/assest';
import { Menu, X } from "@mui/icons-material";
import { useState } from "react";
// import Fab from '@mui/material/Fab';
// import NavigationIcon from '@mui/icons-material/Navigation';


export default function Navbar1(){
  // mobile open
  const nav = [
    {
        listNma :'Home',
        label:""
    },
    {
        listNma :'Services',
        label:"#service"
    },
    {
        listNma :'About',
        label : '#about'
    },
    {
        listNma :'Volunterer',
        label : '#volunt'
    },
    {
        listNma :'Contact us',
        label : '#contact'
    },
];
const [mobileOpen, setMobileOpen] = useState(false);
const toogleNav = ()=>{
    setMobileOpen(!mobileOpen);

}
    return(
      <nav className=" fixed z-50  top-0  w-full py-3 h-24 bg-blue-900 rounded-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm ">
                <div className=" flex  justify-between items-center ">
                    <div className=" flex items-center flex-shrink-0">
                    <img className="h-16 w-16 lg:h-10 lg:w-10 mr-2 " src={ logos} alt="logo"/>
                      <h1 className="text-center text-white font-subt text-xl">Living word of God faith based organisation</h1>

                    </div>
                    <ul className=" hidden lg:flex ml-14 space-x-12">
                        {nav.map((items, index) =>(
                            <li className=" hover:bg-gradient-to-r from-rose-200 to-blue-200 p-3 rounded-lg" key={index}>
                                    <a  key={items.label} className="text-white text-md"
                                     href={items.label} >{items.listNma}</a>
                            </li>
                        ))}
                        <button className="bg-red-800 text-blue-400 p-4 rounded-lg">Donate us</button>
                    </ul>
                </div>

                    <button onClick={toogleNav} className=" lg:hidden hover:bg-white bg-gradient-to-r from-slate-900 to-slate-400">
                        {mobileOpen ?  <X color='primary'/> : <Menu color="primary"/> }
                    </button>


                {mobileOpen && (

                    <div className="fixed right-0 z-20 bg-blue-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {nav.map((item, index) => (
                                <li key={index} className="py-4 ">
                                    <a className=" text-white text-xl" href={item.label} > {item.listNma}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}



            </div>
        </nav>
    )
}
