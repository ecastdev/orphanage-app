// import orphanage from './assests/assest';
import './components.css';

export default function Header(){
    return(
        <div className="flex flex-col items-center"> 
        
         <div className='header flex items-center justify-center p-72 w-screen h-screen'>
                <div className="relative top-14 flex items-center justify-center">
                    <div className="grid gap-12">
                        <h1 className="text-white text-5xl ">
                            JOIN THE COMMUNITY IN CHANGING THE COUNTRY
                        </h1>
                        <button className="bg-blue-900 rounded-lg p-2 text-rose-400"> Join COMMUNITY</button>
                    </div>
                    <div className="grid">
                        <img className="w-80  h-80 rounded-xl" alt='header'/>
                    </div>
                </div>
         </div> 
        </div>
    )
}