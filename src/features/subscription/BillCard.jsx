import { getBillingPlanData } from "../../utils/helper";

export default function BillCard() {
  const { planName, price, total, convenienceFee } = getBillingPlanData();

  return (
    <div style={{ maxWidth: "300px" }}>
      <div className="d-flex justify-content-between align-items-end pb-3 dashed-border-bottom-dark-subtle px-2">
        <div>
          <p className="fw-medium fs-11 mb-1">BILLING CYCLE</p>
          <p className="fs-8 text-secondary mb-0">{planName}</p>
        </div>

        <p className="fs-8 text-secondary mb-0">
          <span className="font-family-sans">$</span>
          {price}
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-start border-bottom px-2 py-3">
        <div>
          <p className="fs-8 text-secondary mb-0 lh-1">Convenience fee</p>
          <span className="fs-12">Tax applied wherever applicable</span>
        </div>

        <p className="fs-8 text-secondary mb-0">
          <span className="font-family-sans">$</span>
          {convenienceFee.toFixed(2)}
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center px-2 py-3">
        <p className="fs-7 fw-medium text-secondary mb-0">TOTAL</p>

        <p className="fs-7 text-secondary mb-0">
          <span className="font-family-sans">$</span>
          {total}
        </p>
      </div>
    </div>
  );
}
