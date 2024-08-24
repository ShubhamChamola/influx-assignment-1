export function getBillingPlanData() {
  let value = sessionStorage.getItem("billingCycle");

  if (value) {
    let convenienceFee = Number(process.env.REACT_APP_CONVENIENCE_FEE);
    let parsedValue = JSON.parse(value);

    let planName = parsedValue.name;

    let price = 0;

    if (planName === "Annual") {
      price = Number(parsedValue.price_per_month);
    } else {
      price = Number(parsedValue.price_per_month);
    }

    price = (price * 12).toFixed(2);

    let total = (Number(price) + Number(convenienceFee)).toFixed(2);

    return { planName, price, total, convenienceFee };
  }

  return null;
}
