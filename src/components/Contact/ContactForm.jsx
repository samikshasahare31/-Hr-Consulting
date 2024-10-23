import { useState } from "react";
import "./ContactForm.css"; // Ensure that your CSS styles are ready
import { useTranslation } from "react-i18next";
import FAQSection from "../FAQ/FAQSection"; // Assuming this is a section in your app

function ContactForm() {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91 IN",
        phone: "",
        company: "",
        inquiry: "PEO & EoR",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(null);

    const countryCodes = [
        { code: "+91", label: "IN" },
        { code: "+1", label: "US" },
        { code: "+44", label: "UK" },
        { code: "+61", label: "AU" },
        // Add more country codes as needed
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formSubmission = {
            access_key: "85452267-67f4-414e-851c-4c986fdfcc3b", // Replace with your actual access key
            ...formData,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formSubmission),
            });

            const result = await response.json();
            if (response.status === 200) {
                setFormStatus("Your form has been submitted successfully.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "+91 IN",
                    phone: "",
                    company: "",
                    inquiry: "PEO & EoR",
                    message: "",
                });
            } else {
                setFormStatus(`Failed to submit: ${result.message}`);
            }
        } catch (error) {
            setFormStatus("An error occurred while submitting the form.");
        }
    };

    return (

        <div className="form-container">
            <div className='form-section'>
                <form onSubmit={handleSubmit}>
                    <div className='form-row'>
                        <div className='form-group'>
                            <label>{t("First Name *")}</label>
                            <input
                                type='text'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='form-group'>
                            <label>{t("Last Name *")}</label>
                            <input
                                type='text'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>{t("Email *")}</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='form-row'>
                        <div className='form-group'>
                            <label>{t("Country Code *")}</label>
                            <select
                                name='countryCode'
                                value={formData.countryCode}
                                onChange={handleChange}
                                required
                            >
                                {countryCodes.map((country) => (
                                    <option
                                        key={country.code}
                                        value={`${country.code} ${country.label}`}
                                    >
                                        {`${country.code} ${country.label}`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='form-group'>
                            <label>{t("Personal Telephone *")}</label>
                            <input
                                type='tel'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>{t("Company *")}</label>
                        <input
                            type='text'
                            name='company'
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label>{t("Reason for inquiry *")}</label>
                        <select
                            name='inquiry'
                            value={formData.inquiry}
                            onChange={handleChange}
                            required
                        >
                            <option value='PEO & EoR'>{t("PEO & EoR")}</option>
                            <option value='Recruitment'>{t("Recruitment")}</option>
                            <option value='HR Consulting'>{t("HR Consulting")}</option>
                            <option value='Payroll Payment'>{t("Payroll Payment")}</option>
                            <option value='Managed Services'>{t("Managed Services")}</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>{t("How can we help you ?")}</label>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type='submit' className='submit-button'>
                        {t("Submit Enquiry")}
                    </button>
                    {formStatus && <p>{formStatus}</p>}
                </form>

            </div>
            <div className="intro-section">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 72 72" fill="none"><g id="carbon:email-new"><path id="Vector" d="M42.75 54H9L8.99325 20.0385L34.7197 37.8495C35.0959 38.1098 35.5425 38.2492 36 38.2492C36.4575 38.2492 36.9041 38.1098 37.2803 37.8495L63 20.0475V40.5H67.5V18C67.4982 16.8071 67.0235 15.6635 66.18 14.82C65.3365 13.9765 64.1929 13.5018 63 13.5H9C7.80689 13.5012 6.66299 13.9757 5.81934 14.8193C4.97568 15.663 4.50119 16.8069 4.5 18V54C4.50179 55.1929 4.97646 56.3365 5.81999 57.18C6.66352 58.0235 7.80707 58.4982 9 58.5H42.75V54ZM58.0477 18L36 33.264L13.9523 18H58.0477Z" fill="#FFBD59"></path><path id="Vector_2" d="M58.5 63C63.4706 63 67.5 58.9706 67.5 54C67.5 49.0294 63.4706 45 58.5 45C53.5294 45 49.5 49.0294 49.5 54C49.5 58.9706 53.5294 63 58.5 63Z" fill="#FFBD59"></path></g></svg>
                <b>Let us help you with your HR Needs</b>
                <p>
                    Whether you’re looking to hire top-notch India talent, navigate the complexities of local employment laws, or seeking expert HR advice, Recruitindo is your gateway to business success in India.
                </p>
                <p>
                    Don’t let legal hurdles or recruiting challenges slow you down. Our comprehensive services are designed to streamline your operations and fuel your growth.
                </p>
                <p>
                    Get Started Today! Fill out the form and one of our experts will get in touch to discuss how we can tailor our services to your unique business needs.
                </p>
                <p>
                    With Recruitindo, your journey to expanding your team and scaling your business in India begins with just a click.
                </p>
            </div>

        </div>
    );
}

export default ContactForm;

