export default function Stepper({ steps }) {
  return (
    <ul className="step-container">
      {steps.map((step, index) => (
        <li key={index}>
          <span className="counter text-white text-opacity-75 fw-light fs-7 text-center">
            {index + 1}
          </span>
          <p className="text-white text-opacity-75 fw-light fs-6 mb-0">
            {step}
          </p>
        </li>
      ))}
    </ul>
  );
}
