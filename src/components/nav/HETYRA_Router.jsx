import { BrowserRouter, Route, Routes } from "react-router-dom";

import HETYRA from "../HETYRA";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import CooperatePage from "./pages/CooperatePage";
import NoMatchPage from "./pages/NoMatchPage";
import AboutUsPage from "./pages/AboutUsPage";
import ResourcesPage from "./pages/ResourcesPage";

export default function HETYRA_Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HETYRA />}>
                <Route index element={<LandingPage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/CooperatePage" element={<CooperatePage />} />
                <Route path="/AboutUsPage" element={<AboutUsPage />} />
                <Route path="/ResourcesPage" element={<ResourcesPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
}