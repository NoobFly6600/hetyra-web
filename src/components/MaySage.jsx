import { Outlet } from "react-router-dom";

import MaySage_Navbar from "./nav/MaySage_Navbar";
import GlobalContext from "../contexts/GlobalContext";
import Footer from "./Footer";

export default function MaySage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <MaySage_Navbar />
      <div style={{ flex: "1", backgroundColor: "#ffffff" }}>
        <GlobalContext.Provider>
          <Outlet />
        </GlobalContext.Provider>
      </div>
      <Footer />
    </div>
  );
}
