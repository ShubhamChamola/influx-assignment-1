import { useState, useEffect } from "react";
import DropDownLink from "../ui/DropDownLink";
import Avatar from "../../assets/icons/Avatar";
import Home from "../../assets/icons/Home";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-100 ${scrolled ? "scrolled" : ""}`}>
      <section className="container d-none d-sm-flex flex-column">
        <div className="w-100 d-flex flex-row justify-content-end align-items-center gap-4 border-bottom py-3">
          <DropDownLink
            parentLink={"#!"}
            parentTitle={"Genre"}
            subLinks={[
              { link: "#!", title: "Sci fi" },
              { link: "#!", title: "Horror" },
              { link: "#!", title: "Action" },
              { link: "#!", title: "Comedy" },
            ]}
          />
          <DropDownLink
            parentLink={"#!"}
            parentTitle={"Account"}
            subLinks={[
              { link: "#!", title: "Profile" },
              { link: "#!", title: "Settings" },
              { link: "#!", title: "Help Center" },
              { link: "#!", title: "Contact Us" },
            ]}
          />
          <DropDownLink
            parentLink={"#!"}
            parentTitle={"Membership"}
            subLinks={[
              { link: "#!", title: "Basic" },
              { link: "#!", title: "Gold" },
              { link: "#!", title: "Premium" },
            ]}
          />
          <button
            type="button"
            className="d-flex flex-row align-items-center gap-2 btn btn-outline-light icon fs-9 rounded-pill py-2"
          >
            <Avatar size="15px" />
            <span className="lh-1">SIGN IN</span>
          </button>
        </div>
        <div className="w-100 d-flex flex-row justify-content-end align-items-center gap-4 py-3">
          <a href="#!" className="fs-8 fw-light animate">
            About
          </a>
          <a href="#!" className="fs-8 fw-light animate">
            Location
          </a>
          <a href="#!" className="fs-8 fw-light animate">
            Blog
          </a>
          <a href="#!" className="fs-8 fw-light animate">
            Events
          </a>
        </div>
      </section>
      <section className="container d-block d-sm-none px-2 py-3 d-flex justify-content-end">
        <Home size="24px" />
      </section>
    </header>
  );
}
