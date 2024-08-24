import { useState } from "react";
import billingCycleData from "../../assets/data/billingCycle.json";
import { useSubscriptionContext } from "../../components/contextProviders/SubscriptionContext";
import { SubscriptionFormSteps } from "../../utils/enum";

function Card({ data, billingCycle, onClickHandler }) {
  return (
    <div
      key={data.name}
      className={`billing-card ${
        data.name === billingCycle.name ? "active" : ""
      } `}
      onClick={() => onClickHandler(data)}
    >
      <span className="checkbox"></span>
      <div className="text">
        <h5 className="text-primary fs-7 fw-normal mb-0">{data.name}</h5>
        <p className="fs-8 text-primary mb-0">
          <span className="font-family-sans">$</span>
          {data.price_per_month}
          <span className="font-family-sans text-body fs-11">/</span>
          <span className="text-body fs-12">mo</span>
        </p>
        {data?.description && (
          <span className="fs-12 font-family-sans">{data.description}</span>
        )}
      </div>
    </div>
  );
}

function getIntialState() {
  let value = sessionStorage.getItem("billingCycle");
  if (value) {
    let parsedValue = JSON.parse(value);
    return parsedValue;
  }

  return billingCycleData[0];
}

export default function BillingPlanForm() {
  const { previousStep, changeActiveStep } = useSubscriptionContext();

  const [billingCycle, setBillingCycle] = useState(() => getIntialState());

  function onClickHandler(data) {
    setBillingCycle(data);
  }

  function backClickHandler(event) {
    event.preventDefault();
    previousStep(SubscriptionFormSteps.LOCATION);
  }

  function nextClickHandler() {
    sessionStorage.setItem("billingCycle", JSON.stringify(billingCycle));
    changeActiveStep(
      SubscriptionFormSteps.LOGIN,
      SubscriptionFormSteps.BILLING,
      billingCycle.name
    );
  }

  return (
    <section className="w-100 rounded-4 bg-dark min-height-form custom-dark-shadow">
      <div className="p-4 p-sm-5">
        <div className="w-fit m-auto">
          <p className="text-primary-emphasis fs-10 fw-medium mb-0">
            STEP 2<span className="font-family-sans">/</span>2
          </p>
          <p className="text-primary fs-7 mb-3 pb-2">
            Choose your billing cycle
          </p>
        </div>

        <div className="pt-3 d-flex flex-column gap-3">
          {billingCycleData.map((data) => (
            <Card
              data={data}
              billingCycle={billingCycle}
              onClickHandler={onClickHandler}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center py-4 px-3 px-sm-5 bg-dark-subtle rounded-bottom-4">
        <a className="animate" href=" " onClick={backClickHandler}>
          Back
        </a>
        <button
          onClick={nextClickHandler}
          className="btn btn-danger text-primary px-4 py-2 fs-10"
        >
          Save <span className="font-family-sans">&</span> Next
        </button>
      </div>
    </section>
  );
}
