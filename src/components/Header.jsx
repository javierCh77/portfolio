import React from "react";
import { Link } from "react-router-dom";





const Header = () => {
  return (
    <div className="container mx-auto">
      <h2 className="mt-8 text-3xl text-white font-semibold">💾 Javier Chavarria</h2>
      <div>
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="hidden lg:flex lg:gap-x-12">
            <Link to="/" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-sky-500">
              Abaut
            </Link>
            <Link to="/blog" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-green-500">
              Blog
            </Link>
            <Link to="/proyects" class="text-lg font-semibold leading-6 text-gray-400  hover:text-white hover:underline hover:font-bold decoration-yellow-300">
              Projects
            </Link>
            <Link to="https://github.com/javierCh77" target="_blank" class="flex gap-2 text-lg font-semibold leading-6 text-gray-400  hover:text-white  hover:underline hover:font-bold decoration-indigo-500">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
            
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
