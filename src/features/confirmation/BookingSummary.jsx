import BillingPlan from "../../assets/icons/BillingPlan";
import Location from "../../assets/icons/Location";
import Calendar from "../../assets/icons/Calendar";
import Repeat from "../../assets/icons/Repeat";
import { getBillingPlanData, getEmail, getLocation } from "../../utils/helper";

export default function BookingSummary() {
  const { planName, total } = getBillingPlanData();
  const { city, state } = getLocation();
  const email = getEmail();

  return (
    <div className="w-100 rounded-4 custom-dark-bg custom-dark-shadow booking-summary-wrapper m-auto">
      <div className="banner">
        <span className="punch"></span>
        <span className="punch"></span>
      </div>
      <div className="p-3">
        <h4 className="fs-6 text-primary fw-medium dashed-border-bottom-dark-subtle pb-3 mt-1">
          MVP Subscription
        </h4>
        <div className="py-2 dashed-border-bottom-dark-subtle">
          <div className="d-flex gap-2 align-items-center mb-2">
            <BillingPlan size={12} />
            <span className="fs-9 text-secondary fw-light">{planName}</span>
          </div>
          <div className="d-flex gap-2 align-items-center mb-2">
            <Location size={12} />
            <span className="fs-9 text-secondary fw-light">
              {city}, {state}
            </span>
          </div>
          <div className="d-flex gap-2 align-items-center mb-2">
            <Calendar size={12} />
            <span className="fs-9 text-secondary fw-light">Sunday 25 Feb</span>
          </div>
        </div>
        <div className="pt-3 pb-2 d-flex  justify-content-between gap-4">
          <div className="flex-fill">
            <h5 className="fs-11 mb-1">EMAIL</h5>
            <p className="mb-0 fs-8 text-secondary text-break font-family-sans">
              {email}
            </p>
          </div>
          <div className="flex-fill">
            <h5 className="fs-11 mb-1">MMR NUMBER</h5>
            <p className="mb-0 fs-8 text-secondary">28002001339169</p>
          </div>
        </div>
      </div>
      <div className="d-flex p-3 bg-light-subtle rounded-bottom-4">
        <div className="flex-shrink-0">
          <Repeat size="16px" />
        </div>

        <p className="fs-12 mb-0 text-secondary text-opacity-75 ms-3">
          Subscription payment will auto
          {<spam className="font-family-sans">-</spam>}billed on 25 Oct 2025 for
          &nbsp;
          {<span className="font-family-sans">${total}</span>} from your credit
          card, unless cancelled
        </p>
      </div>
    </div>
  );
}
