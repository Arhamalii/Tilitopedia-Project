import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../src/Components/function";
import ContactFrom from "./pages/contactFrom";
import LandingPage from "./pages/lanidngPage/index";
import RecruiterForm from "./pages/recruitersPage";
import ResumeUpload from "./pages/resumeUpload";
import InformationT from "./pages/services/IT/";
import OilAndGas from "./pages/services/Oil&gas";
import Banking from "./pages/services/banking";
import Energy from "./pages/services/energy";
import FMCG from "./pages/services/fmcg";
import Manufacture from "./pages/services/manufacture";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload-resume" element={<ResumeUpload />} />
        <Route path="/contact" element={<ContactFrom />} />
        <Route path="/recruiter" element={<RecruiterForm />} />
        <Route path="/service/it" element={<InformationT />} />
        <Route path="/service/oil" element={<OilAndGas />} />
        <Route path="/service/manufacture" element={<Manufacture />} />
        <Route path="/service/energy" element={<Energy />} />
        <Route path="/service/banking" element={<Banking />} />
        <Route path="/service/fmcg" element={<FMCG />} />
      </Routes>
    </>
  );
}

export default App;
