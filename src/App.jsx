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
import PricpeoEor from "./components/pricing/peo&eor/PricpeoEor";
import PricingRecruitment from "./components/pricing/recruitment/PricingRecruitment";


function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/jobVacancies" element={<JobVac/>} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/resources" element={<Resources />} />

          <Route path="/services/peo&eor" element={<PeoEor />} />
          <Route path="/services/recruitment" element={<Recruitment />} />
          <Route path="/services/hrConsulting" element={<HrConsulting />} />
          <Route path="/services/managedServices" element={<ManagedServices />} />

          <Route path="/pricing/peo&eor" element={<PricpeoEor />} />
          <Route path="/pricing/recruitment" element={<PricingRecruitment/>} />
          <Route path="/pricing/hrConsulting" element={< PricHrConsulting/>}  />
          <Route path="/pricing/managedServices" element={<PricingManagedServices />} />

         
         
        </Routes>
      </BrowserRouter>





    </>
  );
}

export default App;














































// 
