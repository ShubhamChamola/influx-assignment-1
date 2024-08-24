import { useNavigate } from "react-router-dom";
import CheckMark from "../../assets/icons/CheckMark";
import { getBillingPlanData } from "../../utils/helper";
import BillCard from "../subscription/BillCard";

export default function OrderSummary() {
  const navigate = useNavigate();
  const { total } = getBillingPlanData();

  function onClickHandler() {
    navigate("/");
  }

  return (
    <div className="w-100 order-summary-wrapper m-auto mt-5 mt-md-0 pt-4 pt-md-0">
      <div className="d-flex gap-3">
        <div className="flex-shrink-0">
          <CheckMark size={25} />
        </div>

        <div className="mb-5">
          <h3 className="text-primary fs-6 lh-1">MVP SUBSCRIPTION ACTIVE</h3>
          <p className="mb-0 fs-9 lh-1">
            Order <span className="font-family-sans">#</span>WK3JH8K
          </p>
        </div>
      </div>
      <BillCard />

      <div className="mt-4 rounded-4 custom-darkest-bg p-4">
        <h6 className="fs-8 mb-3">PAYMENT SUMMARY</h6>
        <div className="d-flex justify-content-between gap-3 align-items-end">
          <div>
            <p className="mb-0 fs-12">Credit card</p>
            <p className="mb-0 fs-9 text-secondary">XXXXXXXXXXXX9871</p>
          </div>
          <p className="mb-0 fs-9 font-family-sans text-secondary">${total}</p>
        </div>
      </div>

      <button
        onClick={onClickHandler}
        className="btn btn-danger text-primary px-4 py-2 fs-10 w-100 mt-4"
      >
        Back to homepage
      </button>
    </div>
  );
}
