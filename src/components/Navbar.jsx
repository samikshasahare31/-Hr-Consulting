import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'; 

const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : "English";
  });

  const dropdownRefs = useRef({}); 

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage === "English" ? "en" : "hi");
    localStorage.setItem("language", selectedLanguage); 
  }, [selectedLanguage, i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideDropdown =
        !dropdownRefs.current["services"]?.contains(event.target) &&
        !dropdownRefs.current["pricing"]?.contains(event.target) &&
        !dropdownRefs.current["language"]?.contains(event.target) &&
        !dropdownRefs.current["mobileServices"]?.contains(event.target) &&
        !dropdownRefs.current["mobilePricing"]?.contains(event.target) &&
        !dropdownRefs.current["mobileLanguage"]?.contains(event.target);
        
      if (isOutsideDropdown) {
        setDropdownOpen({}); // Close all dropdowns
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    if (isSidebarOpen) {
      handleToggleSidebar();
    }
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownKey) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownKey]: !prevState[dropdownKey],
    }));
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleLinkClick = (dropdownKey) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownKey]: false, // Close the dropdown when a link is clicked
    }));
  };

  return (
    <nav className="bg-base-100 sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex">
              <Link to="/" className="text-black font-bold text-xl m-3">
                {t("TEN HR Consulting")}
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center ml-auto space-x-4 text-black">
            <Link
              to="/aboutUs"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("About")} 
            </Link>

            {/* Services Dropdown */}
            <div className="relative flex items-center">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t("Services")}
                <IoMdArrowDropdown
                  className={`inline-block ml-2 transition-transform ${
                    dropdownOpen["services"] ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen["services"] && (
                <div
                  className="absolute top-full right-0 mt-1 w-48 bg-base-100 rounded-md shadow-lg"
                  ref={(el) => (dropdownRefs.current["services"] = el)}
                >
                  <Link
                    to="/services/peo&eor"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("PEO & EoR")} 
                  </Link>
                  <Link
                    to="/services/recruitment"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("Recruitment")} 
                  </Link>
                  <Link
                    to="/services/hrConsulting"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("HR Consulting")} 
                  </Link>
                  <Link
                    to="/services/managedServices"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("Managed Services")} 
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing Dropdown */}
            <div className="relative flex items-center">
              <button
                onClick={() => toggleDropdown("pricing")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t("Pricing")}
                <IoMdArrowDropdown
                  className={`inline-block ml-2 transition-transform ${
                    dropdownOpen["pricing"] ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen["pricing"] && (
                <div
                  className="absolute top-full right-0 mt-1 w-48 bg-base-100 rounded-md shadow-lg"
                  ref={(el) => (dropdownRefs.current["pricing"] = el)}
                >
                  <Link
                    to="/pricing/peo&eor"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("PEO & EoR")} 
                  </Link>
                  <Link
                    to="/pricing/recruitment"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("Recruitment")}
                  </Link>
                  <Link
                    to="/pricing/hrConsulting"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("HR Consulting")} 
                  </Link>
                  <Link
                    to="/pricing/managedServices"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("Managed Services")} 
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/calculator"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Calculator")} 
            </Link>
            <Link
              to="/resources"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Resources")} 
            </Link>
            <Link
              to="/contactUs"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Contact Us")} 
            </Link>

            {/* Language Selector */}
            <div className="relative flex items-center ">
              <button
                onClick={() => toggleDropdown("language")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex"
              >
                {selectedLanguage} <IoMdArrowDropdown />
              </button>
              {dropdownOpen["language"] && (
                <div
                  className="absolute top-full right-0 mt-1 w-32 bg-base-100 rounded-md shadow-lg"
                  ref={(el) => (dropdownRefs.current["language"] = el)}
                >
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t('English')}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("हिंदी")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t('Hindi')}
                  </button>
                </div>
              )}
            </div>
            <Link
            to="/jobVacancies"
            className="btn btn-warning text-black px-4 md:px-12 py-2 rounded-md hover:text-white hover:bg-warning-600 duration-300 cursor-pointer"
          >
            {t("Job Vacancies")} 
          </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-black-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <IoMdClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>


    {/* Mobile menu */}
        <div
        className={`fixed top-0 right-0 h-full w-64 bg-base-100 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex items-center justify-between p-4 bg-base-100">
          <div>
            <Link
              to="/"
              className="text-black font-bold text-xl  m-3"
              onClick={toggleMenu}
            >
              {t('TEN HR Consulting')}
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <IoMdClose className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="p-4 text-black">
          <Link
            to="/aboutUs"
            className="block text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            {t('About')}
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("mobileServices")}
              className="block text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium w-full text-left focus:outline-none"
            >
             {t('Services')}
              <IoMdArrowDropdown
                className={`inline-block ml-2 transition-transform ${
                  dropdownOpen["mobileServices"] ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>
            {dropdownOpen["mobileServices"] && (
              <div
                className="mt-1 w-full bg-base-100 rounded-md shadow-lg"
                ref={(el) => (dropdownRefs.current["mobileServices"] = el)}
              >
                <Link
                  to="/services/peo&eor"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('PEO & EoR')}
                </Link>
                <Link
                  to="/services/recruitment"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('Recruitment')}
                </Link>
                <Link
                  to="/services/hrConsulting"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('HR Consulting')}
                </Link>
                <Link
                  to="/services/managedServices"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('Managed Services')}
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("mobilePricing")}
              className="block text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium w-full text-left focus:outline-none"
            >
              {t('Pricing')}
              <IoMdArrowDropdown
                className={`inline-block ml-2 transition-transform ${
                  dropdownOpen["mobilePricing"] ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>
            {dropdownOpen["mobilePricing"] && (
              <div
                className="mt-1 w-full bg-base-100 rounded-md shadow-lg"
                ref={(el) => (dropdownRefs.current["mobilePricing"] = el)}
              >
                <Link
                  to="/pricing/peo&eor"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('PEO & EoR')}
                </Link>
                <Link
                  to="/pricing/recruitment"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('Recruitment')}
                </Link>
                <Link
                  to="/pricing/hrConsulting"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('HR Consulting')}
                </Link>
                <Link
                  to="/pricing/managedServices"
                  className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {t('Managed Services')}
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/calculator"
            className="text-black-300  hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            {t('Calculator')}
          </Link>
          <Link
            to="/resources"
            className="text-black-300  hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            {t('Resources')}
          </Link>
          <Link
            to="/contactUs"
            className="text-black-300  hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            {t('Contact Us')}
          </Link>

          <div className="relative">
              <button
                onClick={() => toggleDropdown("mobileLanguage")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 block w-full px-3 py-2 rounded-md text-base font-medium flex"
              >
                {selectedLanguage} 
                <IoMdArrowDropdown />
              </button>
              {dropdownOpen["mobileLanguage"] && (
                <div className="mt-1 space-y-1">
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className="block w-full text-left px-4 py-2 text-base text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t('English')}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("हिंदी")}
                    className="block w-full text-left px-4 py-2 text-base text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t('Hindi')}
                  </button>
                </div>
              )}
            </div>
          <Link
            to="/jobVacancies"
            className="text-black-300  hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            {t('Job Vacancies')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
