import React from "react";
import ItemsContainer from "./Item_Cont_Foot";
import SocialIcons from "./SocialIcon";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-slate-400 ">Rentify</span> Experience Seamless
          Living in Your New Home
        </h1>
        <div>
          <span className="text-slate-400">Sign in to Contact Landlord</span>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Rentify. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
};

export default Footer;
