import { useState } from "react";
import "./Home.css";
import Slider from "../../components/home/slider";
import GLOBESVG from "./GLOBESVG";
import COSTSVG from "./COSTSVG";
import COMPLIANCESVG from "./COMPLIANCESVG";
import CHECKLISTSVG from "./CHECKLISTSVG";
import MajorBrandsSlider from "./majorbrandsslider";
function Home() {
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide description.",
    },
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide description.",
    },
    {
      imgSrc: "https://via.placeholder.com/800x400?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide description.",
    },
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
    <section>
      <div className='main-container'>
        <div className='form-container'>
          <div className='content'>
            <div className='text-section'>
              <div className='avatar-section'>
                <img src='/src/assets/icon-avatar.png' alt='Avatars' />
                <p>Join over 250+ businesses that have grown with us</p>
              </div>
              <h1>One platform for hiring Indonesian teams</h1>
              <p>
                Hire your team in Indonesia immediately without forming a
                company. We help businesses comply with regulations and
                streamline their HR processes.
              </p>
              <p className='scroll-instruction'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  className='two_elementor_element'
                >
                  <path
                    d='M7.99967 3.3335C7.82286 3.3335 7.65329 3.40373 7.52827 3.52876C7.40325 3.65378 7.33301 3.82335 7.33301 4.00016V6.66683C7.33301 6.84364 7.40325 7.01321 7.52827 7.13823C7.65329 7.26326 7.82286 7.3335 7.99967 7.3335C8.17649 7.3335 8.34605 7.26326 8.47108 7.13823C8.5961 7.01321 8.66634 6.84364 8.66634 6.66683V4.00016C8.66634 3.82335 8.5961 3.65378 8.47108 3.52876C8.34605 3.40373 8.17649 3.3335 7.99967 3.3335Z'
                    fill='#ACB9C1'
                    class='two_elementor_element'
                  ></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M2.6665 5.33333C2.6665 3.91885 3.22841 2.56229 4.2286 1.5621C5.22879 0.561903 6.58535 0 7.99984 0C9.41432 0 10.7709 0.561903 11.7711 1.5621C12.7713 2.56229 13.3332 3.91885 13.3332 5.33333V10.6667C13.3332 12.0812 12.7713 13.4377 11.7711 14.4379C10.7709 15.4381 9.41432 16 7.99984 16C6.58535 16 5.22879 15.4381 4.2286 14.4379C3.22841 13.4377 2.6665 12.0812 2.6665 10.6667V5.33333ZM11.9998 5.33333V10.6667C11.9998 11.7275 11.5784 12.7449 10.8283 13.4951C10.0781 14.2452 9.0607 14.6667 7.99984 14.6667C6.93897 14.6667 5.92156 14.2452 5.17141 13.4951C4.42126 12.7449 3.99984 11.7275 3.99984 10.6667V5.33333C3.99984 4.27247 4.42126 3.25505 5.17141 2.50491C5.92156 1.75476 6.93897 1.33333 7.99984 1.33333C9.0607 1.33333 10.0781 1.75476 10.8283 2.50491C11.5784 3.25505 11.9998 4.27247 11.9998 5.33333Z'
                    fill='#ACB9C1'
                    className='two_elementor_element'
                  ></path>
                </svg>
                scroll to learn more
              </p>
              <path
                d='M7.99967 3.3335C7.82286 3.3335 7.65329 3.40373 7.52827 3.52876C7.40325 3.65378 7.33301 3.82335 7.33301 4.00016V6.66683C7.33301 6.84364 7.40325 7.01321 7.52827 7.13823C7.65329 7.26326 7.82286 7.3335 7.99967 7.3335C8.17649 7.3335 8.34605 7.26326 8.47108 7.13823C8.5961 7.01321 8.66634 6.84364 8.66634 6.66683V4.00016C8.66634 3.82335 8.5961 3.65378 8.47108 3.52876C8.34605 3.40373 8.17649 3.3335 7.99967 3.3335Z'
                fill='#ACB9C1'
                className='two_elementor_element'
              ></path>
            </div>
            <div className='form-background'></div>
            <div className='form-section'>
              <form onSubmit={handleSubmit}>
                <div className='form-row'>
                  <div className='form-group'>
                    <label>First Name *</label>
                    <input
                      type='text'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='form-group'>
                    <label>Last Name *</label>
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
                  <label>Email *</label>
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
                    <label>Country Code *</label>
                    <select
                      name='countryCode'
                      value={formData.countryCode}
                      onChange={handleChange}
                      required
                    >
                      <option value='+91 IN'>+91 IN</option>
                      {/* Add more options here */}
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>Personal Telephone *</label>
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
                  <label>Company *</label>
                  <input
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label>Reason for inquiry *</label>
                  <select
                    name='inquiry'
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                  >
                    <option value='PEO & EoR'>PEO & EoR</option>
                    <option value='Recruitment'>Recruitment</option>
                    <option value='HR Consulting'>HR Consulting</option>
                    <option value='Payroll Payment'>Payroll Payment</option>
                    <option value='Managed Services'>Managed Services</option>
                    {/* Add more options here */}
                  </select>
                </div>

                <div className='form-group'>
                  <label>How can we help you?</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type='submit' className='submit-button'>
                  Submit Enquiry
                </button>
                {formStatus && <p>{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section  */}

      <div className='services-section'>
        <h2>What we do</h2>
        <h3>Comprehensive HR and PEO/EoR solutions</h3>
        <div className='slider'>
          <Slider />
        </div>
        {/*partner section*/}

        <div className='partner-section'>
          <h2 className='partner-title'>WHY PARTNER WITH US</h2>
          <h3 className='partner-subtitle'>Why Partner with Us</h3>

          <div className='partner-content'>
            <div className='partner-text'>
              <div className='partner-right'>
                <GLOBESVG className='partner-icon' />
                <h4 className='partner-expertise'>Expert Local Knowledge</h4>
              </div>
              <p className='partner-description'>
                We are local experts who provide on-the-ground support and
                guidance in Indonesia. From HR specialists to legal advisors, we
                are equipped to handle any challenge your operation may face.
                Our local presence means we're always here to support your
                business with a deep understanding of the Indonesian business
                climate. Benefit from our expertise and established networks to
                ensure your Indonesian venture is successful.
              </p>
            </div>
            <div className='partner-image-container'>
              <img
                src='/src/assets/images/Expert-local-knowledge.jpeg'
                alt='Expert local knowledge in Indonesia'
                className='partner-image'
              />
            </div>
          </div>

          <div className='cost-content'>
            <div className='cost-image-container'>
              <img
                src='/src/assets/images/cost-effective-solutions.jpg'
                alt='cost'
                className='cost-image'
              />
            </div>
            <div className='cost-text'>
              <div className='cost-left'>
                <COSTSVG className='cost-icon' />
                <h4 className='cost-expertise'>Cost-Effective Solutions</h4>
              </div>
              <p className='cost-description'>
                Avoid the big expenses and long waits that come with starting a
                new company in Indonesia. With our help, you can get to work
                quickly and cut down on legal and setup costs. Put your money
                and effort into growing your business instead of getting tangled
                up in complicated paperwork.
              </p>
            </div>
          </div>

          <div className='compliance-content'>
            <div className='compliance-text'>
              <div className='compliance-right'>
                <COMPLIANCESVG className='compliance-icon' />
                <h4 className='compliance-expertise'>100% Compliance</h4>
              </div>
              <p className='compliance-description'>
                Indonesia's legal environment is unique, with regulations that
                can be intricate and often change. With our EOR service, you
                gain access to our in-depth knowledge of Indonesian labor laws,
                tax regulations, and compliance requirements. We act as your
                legal buffer, minimizing risks and protecting your business
                interests. Our team stays abreast of the latest legal updates,
                providing peace of mind that your operations are always
                compliant and your business integrity remains intact.
              </p>
            </div>
            <div className='compliance-image-container'>
              <img
                src='/src/assets/compliance.jpeg'
                alt='Expert local knowledge in Indonesia'
                className='partner-image'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='one-stop'>
        <div className='one-stop-text'>
          <h2>One-stop HR Service For Your Business</h2>
          <p className='one-stop-description'>
            Recruitindo now assists you in providing HR Management services
            starting from PEO services. Our fees are competitively priced,
            saving you money compared to other service providers. We don’t just
            offer company incorporation HR services; we are your business
            partner.
          </p>

          <ul className='icon-text-list'>
            <div className='icon-text-row'>
              <li className='icon-text-list-item'>
                <CHECKLISTSVG />
                Regulatory and Tax Compliance
              </li>
              <li className='icon-text-list-item'>
                <CHECKLISTSVG />
                Work Permits
              </li>
              <li className='icon-text-list-item'>
                <CHECKLISTSVG />
                Payroll Processing
              </li>
              <li className='icon-text-list-item'>
                <CHECKLISTSVG />
                Talent recruitment
              </li>
              <li className='icon-text-list-item'>
                <CHECKLISTSVG />
                Employee onboarding and off-boarding
              </li>
              <li className='icon-text-list-item'>
                <CHECKLISTSVG />
                HR Consulting Services / Ad-hoc HR Services
              </li>
            </div>
            {/* <div className='icon-text-row'></div>
            <div className='icon-text-row'></div> */}
          </ul>

          <button className='schedule-btn'>Schedule Now →</button>
        </div>

        <img
          src='/src/assets/one-stop-hr-services-for-your-business.jpeg'
          alt='HR Service'
          className='one-stop-image'
        />
      </div>

      <div className='Brands-container'>
        <h2>We Work With Major Brands Across the World</h2>
        <MajorBrandsSlider className='brand-slider' />
      </div>
    </section>
  );
}

export default Home;
