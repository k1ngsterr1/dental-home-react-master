import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./App";
import Error from "./pages/error/Error";
import TeethHealing from "./pages/services/teeth-healing/TeethHealing";
import ChildDental from "./pages/children-dental/ChildrenDental";
import PricesPage from "./pages/prices/PricesPage";
import Privacy from "./pages/privacy/PrivacyPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import WorksPage from "./pages/works/worksPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import ClinicsPage from "./pages/clinics/ClinicsPage";
import Whitening from "./pages/services/whitening/Whitening";
import Hygiene from "./pages/services/hygiene/Hygiene";
import BiteCorrection from "./pages/services/bite-correction/BiteCorrection";
import ProstheticsPage from "./pages/services/prosthetics/ProstheticsPage";
import VinirsPage from "./pages/services/vinirs/VinirsPage";
import Surgery from "./pages/services/surgery/Surgery";
import DiagnosticPage from "./pages/services/diagnostic/DiagnosticPage";
import ChildBiteCorrection from "./pages/services/child-bite-correction/ChildBite";
import ChildSurgery from "./pages/services/child-surgery/ChildSurgery";
import ChildTeeth from "./pages/services/child-teeth-healing/ChildTeeth";
import ChildHygiene from "./pages/services/child-hygiene/ChildHygiene";
import ChildSleep from "./pages/services/child-healing-insleep/ChildSleep";
import ChildDiagnostic from "./pages/services/child-diagnostic/ChildDiagnostic";
import Cleaning from "./pages/services/teeth-cleaning/TeethCleaning";
import AirFlow from "./pages/services/airflow/Airflow";
import AmazingWhite from "./pages/services/amazing-white/AmazingWhite";
import ZoomWhitening from "./pages/services/zoom-whitening/ZoomWhitening";
import HealInSleep from "./pages/services/heal-insleep/HealInSleep";
import SedationHeal from "./pages/services/sedation-heal/SedationHeal";
import ImplantsPage from "./pages/services/implants/Implants";
import OrthoCorrection from "./pages/services/ortho-correction/OrthoCorrection";
import CrownsPage from "./pages/services/teeth-crowns/TeethCrowns";
import ToothRestorationPage from "./pages/services/tooth-restoration/ToothRestoration";
import BracesPage from "./pages/services/braces/BracesPage";
import BugelPage from "./pages/services/bugel/BugelPage";

import { doesNotMatch } from "assert";
import TeethCt from "./pages/services/teeth-ct";
import TeethDelete from "./pages/services/teeth-delete";
import CystDelete from "./pages/services/cyst-delete";
import WisdomTooth from "./pages/services/wisdom-tooth-delete";
import ThreeDPic from "./pages/services/3d";
import OPTG from "./pages/services/optg";
import ScopePage from "./pages/services/scope";
import MRTPage from "./pages/services/mrt";
import XrayPage from "./pages/services/xray";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// const RedirectTo404 = () => {
//   useEffect(() => {
//     window.location.href = "https://dental-home.ru/404.html";
//   }, []);

//   return null; // render nothing
// };

ReactDOM.render(
  <Router>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      <Route path="/index.shtml" element={<Home />} />
      <Route path="/index.html" element={<Navigate replace to="/" />} />
      <Route path="/index.shtml" element={<Navigate replace to="/" />} />
      <Route path="/children-dental" element={<ChildDental />} />
      <Route path="/prices" element={<PricesPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/clinics" element={<ClinicsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/services/whitening" element={<Whitening />} />
      <Route path="/services/hygiene" element={<Hygiene />} />
      <Route
        path="/services/tooth-restoration"
        element={<ToothRestorationPage />}
      />
      <Route path="/services/teeth-cleaning" element={<Cleaning />} />
      <Route path="/services/bite-correction" element={<BiteCorrection />} />
      <Route path="/services/teeth-healing" element={<TeethHealing />} />
      <Route path="/services/prosthetics" element={<ProstheticsPage />} />
      <Route path="/services/vinirs" element={<VinirsPage />} />
      <Route path="/services/surgery" element={<Surgery />} />
      <Route path="/services/cleaning" element={<Cleaning />} />
      <Route path="/services/airflow" element={<AirFlow />} />
      <Route path="/services/amazing-white" element={<AmazingWhite />} />
      <Route path="/services/diagnostic" element={<DiagnosticPage />} />
      <Route path="/services/zoom-whitening" element={<ZoomWhitening />} />
      <Route path="/services/sedation-heal" element={<SedationHeal />} />
      <Route path="/services/implants" element={<ImplantsPage />} />
      <Route path="/services/ortho-correction" element={<OrthoCorrection />} />
      <Route path="/services/teeth-crowns" element={<CrownsPage />} />
      <Route path="/services/bugel-prothesis" element={<BugelPage />} />
      <Route path="/services/teeth-ct" element={<TeethCt />} />
      <Route path="/services/teeth-delete" element={<TeethDelete />} />
      <Route path="/services/cyst-delete" element={<CystDelete />} />
      <Route path="/services/wisdom-tooth-delete" element={<WisdomTooth />} />
      <Route path="/services/3d" element={<ThreeDPic />} />
      <Route path="/services/optg" element={<OPTG />} />
      <Route path="/services/scope" element={<ScopePage />} />
      <Route path="/services/mrt" element={<MRTPage />} />
      <Route path="/services/xray" element={<XrayPage />} />
      <Route
        path="/service/tooth-restoration"
        element={<ToothRestorationPage />}
      />
      <Route
        path="/services/child-bite-correction"
        element={<ChildBiteCorrection />}
      />
      <Route path="/services/child-diagnostic" element={<ChildDiagnostic />} />
      <Route path="/services/braces" element={<BracesPage />} />
      <Route path="/services/child-surgery" element={<ChildSurgery />} />
      <Route path="/services/child-teeth" element={<ChildTeeth />} />
      <Route path="/services/child-hygiene" element={<ChildHygiene />} />
      <Route path="/services/child-sleep" element={<ChildSleep />} />
      <Route path="/services/healing-in-sleep" element={<HealInSleep />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
