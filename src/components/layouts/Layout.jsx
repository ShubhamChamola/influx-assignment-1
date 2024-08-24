import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { Routes } from "../../utils/constants";

export default function Layout() {
  const location = useLocation();

  const isHomePage = location.pathname === Routes.Home;
  const isConfirmationPage = location.pathname === Routes.Confirmation;

  return (
    <>
      {!isConfirmationPage && <Header />}
      <main
        className={`${
          isHomePage || isConfirmationPage ? "pt-0" : ""
        } w-100 footer-margin`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
