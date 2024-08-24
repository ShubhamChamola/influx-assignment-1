import { Routes, Route, useNavigate } from "react-router-dom";
import Index from "../../pages/Index";
import Layout from "../../components/layouts/Layout";
import Subscription from "../../pages/Subscription";
import Confirmation from "../../pages/Confirmation";
import { useEffect } from "react";

function CheckConfirmationPagePermission() {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof permission !== "boolean") navigate("/");
  }, []);

  let value = sessionStorage.getItem("viewConfirmation");
  let permission = JSON.parse(value);

  if (typeof permission === "boolean" && permission) {
    return <Confirmation />;
  }

  return null;
}

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="subscription" element={<Subscription />} />
        <Route
          path="confirmation"
          element={<CheckConfirmationPagePermission />}
        />
      </Route>
    </Routes>
  );
}
