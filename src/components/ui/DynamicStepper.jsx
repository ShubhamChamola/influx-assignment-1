import { useSubscriptionContext } from "../contextProviders/SubscriptionContext";

export default function DynamicStepper() {
  const { stepsConfig, activeStep } = useSubscriptionContext();

  return (
    <ul className="dynamic-stepper-container">
      {Object.entries(stepsConfig).map(([id, stepData]) => (
        <li
          key={id}
          className={`${activeStep === Number(id) ? "active" : ""}${
            activeStep > Number(id) ? "completed" : ""
          }`}
        >
          <span className="bullet"></span>
          <div className="text-container">
            <p className="fs-12 mb-0 fw-medium">
              {stepData.label.toUpperCase()}
            </p>
            <p className="fs-7 mb-0 text-secondary">{stepData.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
