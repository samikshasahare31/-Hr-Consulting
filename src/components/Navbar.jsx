import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation(); // Hook for translations
    const [sticky, setSticky] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const languageDropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);
    const pricingDropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle click outside the dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }
            if (pricingDropdownRef.current && !pricingDropdownRef.current.contains(event.target)) {
                setIsPricingDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const togglePricingDropdown = () => {
        setIsPricingDropdownOpen(!isPricingDropdownOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Change the language
        setIsLanguageDropdownOpen(false); // Close the dropdown after selecting a language
    };

    const navItems = (
        <>
            <li ref={servicesDropdownRef}>
                <div className="flex items-center cursor-pointer" onClick={toggleServicesDropdown}>
                    <span>{t('Services')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isServicesDropdownOpen && (
                    <ul className="w-48 md:absolute md:mt-10 bg-white shadow-lg rounded-lg">
                        <li><a>{t('PEO&EoR')}</a></li>
                        <li><a>{t('Recruitment')}</a></li>
                        <li><a>{t('HR Consulting')}</a></li>
                        <li><a>{t('Managed Services')}</a></li>
                    </ul>
                )}
            </li>

            <li ref={pricingDropdownRef}>
                <div className="flex items-center cursor-pointer" onClick={togglePricingDropdown}>
                    <span>{t('Pricing')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isPricingDropdownOpen && (
                    <ul className="w-48 md:absolute md:mt-10 bg-white shadow-lg rounded-lg">
                        <li><a>{t('PEO&EoR')}</a></li>
                        <li><a>{t('Recruitment')}</a></li>
                        <li><a>{t('HR Consulting')}</a></li>
                        <li><a>{t('Managed Services')}</a></li>
                    </ul>
                )}
            </li>

            <li>
                <a href="/">{t('Resources')}</a>
            </li>
            <li>
                <a>{t('Contact Us')}</a>
            </li>
            <li>
                <a>{t('About')}</a>
            </li>

            <li ref={languageDropdownRef}>
                <div className="flex items-center cursor-pointer" onClick={toggleLanguageDropdown}>
                    <span>{t(i18n.language === 'en' ? 'English' : i18n.language === 'hi' ? 'Hindi' : 'French')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isLanguageDropdownOpen && (
                    <ul className="w-34 md:absolute md:mt-10 bg-white shadow-lg rounded-lg">
                       
                        <li>
                            <a onClick={() => changeLanguage('en')}>
                                {t('English')}
                            </a>
                        </li>
                        <li>
                            <a onClick={() => changeLanguage('hi')}>
                                {t('Hindi')}
                            </a>
                        </li>
                        <li><a onClick={() => changeLanguage('fr')}>{t('French')}</a></li>
                    </ul>
                )}
            </li>
        </>
    );

    return (
        <>
            <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
                sticky ? 'sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out' : ''
            }`}>
                <div className="navbar">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isMobileMenuOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {navItems}
                            </ul>
                        )}
                    </div>
                    <div className="navbar-start">
                        <a className="text-1xl md:text-2xl font-bold cursor-pointer">{t('TEN HR Consulting')}</a>
                    </div>

                    <div className="navbar-end flex items-center">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">{navItems}</ul>
                        </div>
                        <div className="">
                            <a className="btn btn-warning text-black px-4 md:px-12 py-2 rounded-md hover:text-white hover:bg-warning-600 duration-300 cursor-pointer">
                                {t('Job Vacancies')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
