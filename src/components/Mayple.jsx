import { Outlet } from "react-router-dom";

import Mayple_Navbar from "./nav/Mayple_Navbar";
import GlobalContext from "../contexts/GlobalContext";
import Footer from "./Footer";

export default function Mayple() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Mayple_Navbar />
      <div style={{ flex: "1", backgroundColor: "#ffffff" }}>
        <GlobalContext.Provider>
          <Outlet />
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}
