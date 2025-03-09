import React from 'react'
import {Link , NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justift-between items-center mx-auto max-w-screen-xl">
          <div className="flex justify-between items-center w-full px-4 lg:px-8">
            {/* Logo (keeps its original position) */}
            <Link to="/" className="flex items-center">
              <img src="\public\wesbiteLogo.jpg" className="mr-2 h-12" alt="" />
            </Link>
            {/* Centered Navigation Links */}
            <div className="flex-grow flex justify-center">
              <ul
                className="flex space-x-20
              font-medium"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
             ${isActive ? "text-orange-700" : "text-gray-700"} 
             lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
             ${isActive ? "text-orange-700" : "text-gray-700"} 
             lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
             ${isActive ? "text-orange-700" : "text-gray-700"} 
             lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
             ${isActive ? "text-orange-700" : "text-gray-700"} 
             lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    GitHub
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
             ${isActive ? "text-orange-700" : "text-gray-700"} 
             lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    User
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Right-aligned buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
