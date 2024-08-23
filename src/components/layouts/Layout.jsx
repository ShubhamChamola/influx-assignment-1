import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { Routes } from "../../utils/enum";

export default function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname === Routes.Home;

  return (
    <>
      <Header />
      <main
        className={`${isHomePage && "home-page"} w-100 h-100 footer-margin`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
