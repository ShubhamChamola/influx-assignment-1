import DynamicStepper from "../components/ui/DynamicStepper";
import {
  SubscriptionContextProvider,
  useSubscriptionContext,
} from "../components/contextProviders/SubscriptionContext";
import LocationForm from "../features/subscription/LocationForm";
import BillingPlanForm from "../features/subscription/BillingPlanForm";
import { SubscriptionFormSteps } from "../utils/enum";
import LoginForm from "../features/subscription/LoginForm";
import CheckoutForm from "../features/subscription/CheckoutForm";

function FormWrapper() {
  const { activeStep } = useSubscriptionContext();

  return (
    <div className="subscription-form mt-5 mt-md-0">
      {activeStep === SubscriptionFormSteps.LOCATION && <LocationForm />}
      {activeStep === SubscriptionFormSteps.BILLING && <BillingPlanForm />}
      {activeStep === SubscriptionFormSteps.LOGIN && <LoginForm />}
      {activeStep === SubscriptionFormSteps.CHECKOUT && <CheckoutForm />}
    </div>
  );
}

export default function Subscription() {
  return (
    <SubscriptionContextProvider>
      <section className="container w-100 h-100 pt-5 subscription-container">
        <div className="row w-100 pb-5">
          {/* Steps */}
          <div className="col-12 col-md-5 col-lg-6">
            <div className="subscription-step">
              <h2 className="fs-5 text-primary">MVP Subscription</h2>
              <p className="fw-normal mb-3 fs-8">
                Your go&#8209;to Movie Membership Program
              </p>
              <DynamicStepper />
            </div>
          </div>

          {/* Form */}
          <div className="col-12 col-md-7 col-lg-6">
            <FormWrapper />
          </div>
        </div>
      </section>
    </SubscriptionContextProvider>
  );
}
