import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../src/Components/function";
import ContactFrom from "./pages/contactFrom";
import LandingPage from "./pages/lanidngPage/index";
import RecruiterForm from "./pages/recruitersPage";
import ResumeUpload from "./pages/resumeUpload";
import InformationT from "./pages/services/IT/";
import OilAndGas from "./pages/services/Oil&gas";

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
      </Routes>
    </>
  );
}

export default App;
