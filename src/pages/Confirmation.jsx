import BookingSummary from "../features/confirmation/BookingSummary";
import OrderSummary from "../features/confirmation/OrderSummary";
import { useEffect } from "react";

export default function Confirmation() {
  useEffect(() => {
    return () => {
      sessionStorage.clear();
    };
  }, []);

  return (
    <section className="d-flex align-items-center justify-content-center padding-top-bottom-medium container">
      <div className="row w-100">
        <div className="col-12 col-md-6">
          <BookingSummary />
        </div>
        <div className="col-12 col-md-6">
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}
