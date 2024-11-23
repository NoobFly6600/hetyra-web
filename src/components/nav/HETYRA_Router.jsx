import { BrowserRouter, Route, Routes } from "react-router-dom";

import HETYRA from "../HETYRA";
import LandingPage from "./pages/LandingPage";
import InHomeServicesPage from "./pages/InHomeServicesPage";
import ProvidersPage from "./pages/ProvidersPage";
import TrustSafetyPage from "./pages/TrustSafetyPage";
import AboutUsPage from "./pages/AboutUsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import HelpPage from "./pages/HelpPage";
import NoMatchPage from "./pages/NoMatchPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

export default function HETYRA_Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HETYRA />}>
                <Route index element={<LandingPage />} />
                <Route path="/in-home-services" element={<InHomeServicesPage />} />
                <Route path="/providers" element={<ProvidersPage />} />
                <Route path="/trust-safety" element={<TrustSafetyPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NoMatchPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
}