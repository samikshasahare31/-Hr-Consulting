import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import PeoEor from "./components/services/peo&eor/PeoEor";
import Recruitment from "./components/services/recruitment/Recruitment";
import HrConsulting from "./components/services/hrConsulting/HrConsulting";
import ManagedServices from "./components/services/managedServices/ManagedServices";
import PricingPeoEor from "./components/pricing/peo&eor/PeoEor";
import PricingRecruitment from "./components/pricing/recruitment/Recruitment";
import PricingHrConsulting from "./components/pricing/hrConsulting/HrConsulting";
import PricingManagedServices from "./components/pricing/managedServices/ManagedServices";
import Resources from "./components/resources/Resources";
import ContactUs from "./components/contactUs/ContactUs";
import JobVacancies from "./components/jobVacancies/jobVacancies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services/peo&eor" element={<PeoEor />} />
          <Route path="/services/recruitment" element={<Recruitment />} />
          <Route path="/services/hrConsulting" element={<HrConsulting />} />
          <Route
            path="/services/managedServices"
            element={<ManagedServices />}
          />
          <Route path="/pricing/peo&eor" element={<PricingPeoEor />} />
          <Route path="/pricing/recruitment" element={<PricingRecruitment />} />
          <Route
            path="/pricing/hrConsulting"
            element={<PricingHrConsulting />}
          />
          <Route
            path="/pricing/managedServices"
            element={<PricingManagedServices />}
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/jobVacancies" element={<JobVacancies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
