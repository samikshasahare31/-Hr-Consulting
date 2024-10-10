import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";
import JobVac from "./components/jobVacancies/JobVac";
import Resources from "./components/resources/Resources";
import HrConsulting from "./components/services/hrConsulting/HrConsulting";
import PricHrConsulting from "./components/pricing/hrConsulting/PricHrConsulting";
import ManagedServices from "./components/services/managedServices/ManagedServices";
import Recruitment from "./components/services/recruitment/Recruitment";
import PeoEor from "./components/services/peo&eor/PeoEor";
import PricingManagedServices from "./components/pricing/managedServices/PricingManagedServices";
import PricingPeoEor from "./components/pricing/peo&eor/PricingPeoEor";
import PricingRecruitment from "./components/pricing/recruitment/PricingRecruitment";
import Calculator from "./components/calculator/Calculator";
import { I18nextProvider } from "react-i18next";
import i18n from "../public/i18n";
import Footer from "./components/Footer";
import ApplyTalent from "./components/services/applyTalent/ApplyTalent";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/jobVacancies" element={<JobVac />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/resources" element={<Resources />} />

            <Route path="/services/peo&eor" element={<PeoEor />} />
            <Route path="/services/recruitment" element={<Recruitment />} />
            <Route path="/services/hrConsulting" element={<HrConsulting />} />
            <Route
              path="/services/managedServices"
              element={<ManagedServices />}
            />

            <Route path="/pricing/peo&eor" element={<PricingPeoEor />} />
            <Route
              path="/pricing/recruitment"
              element={<PricingRecruitment />}
            />
            <Route path="/applyTalent" element={<ApplyTalent />} />
            <Route
              path="/pricing/hrConsulting"
              element={<PricHrConsulting />}
            />
            <Route
              path="/pricing/managedServices"
              element={<PricingManagedServices />}
            />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
      <Footer />
    </>
  );
}

export default App;
