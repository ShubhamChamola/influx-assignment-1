import { Routes, Route } from "react-router-dom";
import Index from "../../pages/Index";
import Layout from "../../components/layouts/Layout";
import Subscription from "../../pages/Subscription";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="subscription" element={<Subscription />} />
      </Route>
    </Routes>
  );
}
