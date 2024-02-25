import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SiteRoutes from "./SiteRoutes";
import { SiteContext } from "./Context/SiteContext";


function App() {
  const { user, handleLogin, handleLogOut } = useContext(SiteContext);

  return (
    <>
      <Navbar />
      <div>
        <SiteRoutes />
      </div>
    </>
  );
}

export default App;
