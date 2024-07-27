
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logos from './assests/assest';
export default function Footer1() {
  return (
    <Footer container className='mt-32 flex items-center '>
      <div className="w-full bg-blue-900 ">
        <div className="grid w-full justify-between items-center sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              src={logos}
              className=' text-white text-sm max-w-full lg:w-full  ml-5 mt-5'
              alt="Living Word of God Faith Based Organization"
              name="Living Word of God Faith Based Organization"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about"  className='text-white'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-white font-light'>Living Word of God Faith Based Organization</Footer.Link>
                <Footer.Link href="#" className='text-white font-light'>Organization</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-white font-light'>Facebook</Footer.Link>
                <Footer.Link href="#" className='text-white font-light'>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-white font-light'>Privacy Policy</Footer.Link>
                <Footer.Link href="#" className='text-white font-light'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full mb-4 sm:flex sm:items-center sm:justify-between">

          <Footer.Copyright className='text-white  font-light' href="#" by="Living Word of God Faith Based Organization" year={2024} />
          <div className="mt-4 flex mr-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
