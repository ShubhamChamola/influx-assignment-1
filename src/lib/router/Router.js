import { Routes, Route } from "react-router-dom";
import Index from "../../pages/Index";
import Layout from "../../components/Layout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
}
