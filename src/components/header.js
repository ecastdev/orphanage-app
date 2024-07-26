// import orphanage from './assests/assest';
import './components.css';

export default function Header(){
    return(
        <div className="flex  flex-col items-center">

         <div className='header  items-center justify-center p-32 lg:p-72 w-screen h-screen'>
                <div className="relative top-14  items-center justify-center">
                    <div className="grid gap-12">
                        <h1 className="text-white text-3xl lg:text-6xl uppercase ">
                            JOIN THE Living Word of God Faith Based Organization
                        </h1>

                        <h1 className="text-blue-800 ml-16 lg:ml-32 font-extrabold text-4xl lg:text-7xl uppercase ">
                              IN CHANGING THE COMMUNITY
                        </h1>
                        <button className="bg-blue-900 rounded-lg p-2 text-rose-400 hover:bg-white hover:text-rose-900"> Join COMMUNITY</button>
                    </div>

                </div>
         </div>
        </div>
    )
}
