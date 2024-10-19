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
          <div className="flex items-center ml-auto space-x-4 text-black hidden lg:flex">
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
                  <Link
                    to="/services/payrollProcessing"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("PayrollProcessing")}
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
                  <Link
                    to="/pricing/payrollProcessing"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("PayrollProcessing")}
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
                    {t("English")}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("हिंदी")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t("Hindi")}
                  </button>
                </div>
              )}
            </div>
            <Link
            to="/jobVacancies"
            className="btn btn-warning text-black-300 hover:bg-warning-600 hover:text-white rounded-md text-sm font-small cursor-pointer"
            // className=" text-black px-4 md:px-12 py-2 rounded-md hover:text-white  duration-300 cursor-pointer"
          >
            {t("Job Vacancies")} 
          </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isOpen ? <IoMdClose size={24} /> : <FaBarsStaggered size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden ">
          <div className="flex flex-col fixed top-0 left-0 mt-16 w-full bg-base-100 p-4">
            <Link
              to="/aboutUs"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("About")}
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("mobileServices")}
                className="block text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium w-full text-left focus:outline-none"
              >
                {t("Services")}
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
                    onClick={() => handleLinkClick("mobileServices")}
                  >
                    {t("PEO & EoR")}
                  </Link>
                  <Link
                    to="/services/recruitment"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobileServices")}
                  >
                    {t("Recruitment")}
                  </Link>
                  <Link
                    to="/services/hrConsulting"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobileServices")}
                  >
                    {t("HR Consulting")}
                  </Link>
                  <Link
                    to="/services/managedServices"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobileServices")}
                  >
                    {t("Managed Services")}
                  </Link>
                  <Link
                    to="/services/payrollProcessing"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobileServices")}
                  >
                    {t("PayrollProcessing")}
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("mobilePricing")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex"
              >
                {t("Pricing")}
                <IoMdArrowDropdown
                  className={`inline-block ml-2 transition-transform ${
                    dropdownOpen["mobilePricing"] ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen["mobilePricing"] && (
                <div
                  className="bg-base-100 rounded-md shadow-lg mt-1 w-full"
                  ref={(el) => (dropdownRefs.current["mobilePricing"] = el)}
                >
                  <Link
                    to="/pricing/peo&eor"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobilePricing")}
                  >
                    {t("PEO & EoR")}
                  </Link>
                  <Link
                    to="/pricing/recruitment"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobilePricing")}
                  >
                    {t("Recruitment")}
                  </Link>
                  <Link
                    to="/pricing/hrConsulting"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobilePricing")}
                  >
                    {t("HR Consulting")}
                  </Link>
                  <Link
                    to="/pricing/managedServices"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobilePricing")}
                  >
                    {t("Managed Services")}
                  </Link>
                  <Link
                    to="/pricing/payrollProcessing"
                    className="block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                    onClick={() => handleLinkClick("mobilePricing")}
                  >
                    {t("PayrollProcessing")}
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/calculator"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Calculator")}
            </Link>
            <Link
              to="/resources"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Resources")}
            </Link>
            <Link
              to="/contactUs"
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("Contact Us")}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("mobileLanguage")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex"
              >
                {selectedLanguage} <IoMdArrowDropdown />
              </button>
              {dropdownOpen["mobileLanguage"] && (
                <div
                  className="bg-base-100 rounded-md shadow-lg mt-1 w-full"
                  ref={(el) => (dropdownRefs.current["mobileLanguage"] = el)}
                >
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t("English")}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("हिंदी")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t("Hindi")}
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
      )}
    </nav>
  );
};

export default Navbar;
