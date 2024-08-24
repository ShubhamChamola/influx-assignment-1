import React, { useEffect, useState } from "react";
import Checkbox from "../../components/input/Checkbox";
import Card from "../../assets/icons/Card";
import TextInput from "../../components/input/TextInput";
import { InputType } from "../../utils/enum";
import { getBillingPlanData } from "../../utils/helper";
import Repeat from "../../assets/icons/Repeat";

export default function CheckoutForm() {
  const [termAccpeted, setTermAccepted] = useState(false);

  const { total } = getBillingPlanData();

  return (
    <section className="d-flex flex-column gap-3">
      <div className="w-100 rounded-4 bg-dark custom-dark-shadow px-4 px-sm-5 py-4">
        <p className="text-secondary fs-8 fw-nomral mb-0">
          Terms <span className="font-family-sans">&</span> Conditions
          <span className="font-family-sans">*</span>
        </p>

        <div className="d-flex gap-2 align-items-start mt-3">
          <div className="flex-shrink-0 mt-1">
            <Checkbox isChecked={termAccpeted} setIsChecked={setTermAccepted} />
          </div>

          <p className="fs-12 mb-0">
            I agree to the &nbsp;
            <a href=" " className="text-primary-emphasis underline">
              Terms
            </a>
            &nbsp;
            <span className="font-family-sans">&</span>
            &nbsp;
            <a href=" " className="text-primary-emphasis underline">
              Conditions,
            </a>
            &nbsp;
            <a href=" " className="text-primary-emphasis underline">
              Privacy Policy,
            </a>
            &nbsp;
            <span className="font-family-sans">&</span>
            &nbsp;
            <a href=" " className="text-primary-emphasis underline">
              Refund Policy
            </a>
          </p>
        </div>
      </div>

      <div className="w-100 rounded-4 bg-dark custom-dark-shadow ">
        <div className="p-4 p-sm-5">
          <div className="d-flex gap-2 align-items-center">
            <Card size="20px" />
            <p className="text-secondary fs-7 fw-nomral mb-0">
              Credit <span className="font-family-sans"> /</span> Debit card
            </p>
          </div>

          <div className="d-flex flex-column gap-3 mt-4">
            <TextInput inputType={InputType.EMAIL} label="Cardholder Name" />
            <TextInput inputType={InputType.TEXT} label="Card Number" />
            <div className="d-flex gap-4">
              <TextInput inputType={InputType.DATE} label="Expiration Date" />
              <TextInput inputType={InputType.PASSWORD} label="CVV" />
            </div>
          </div>

          <div className="d-flex gap-2 align-items-start mt-3">
            <div className="flex-shrink-0 mt-1">
              <Checkbox />
            </div>

            <p className="fs-12 mb-0">
              I agree to consent to use the same card for renewals. &nbsp;
              <a href=" " className="text-primary-emphasis underline">
                Learn more
              </a>
            </p>
          </div>

          <button
            disabled={!termAccpeted}
            // onClick={onClickHandler}
            className="btn btn-danger text-primary px-4 py-2 fs-10 w-100 mt-4"
          >
            Complete payment
          </button>
        </div>

        <div className="d-flex p-3 bg-light-subtle rounded-bottom-4">
          <div className="flex-shrink-0">
            <Repeat size="16px" />
          </div>

          <p className="fs-10 mb-0 text-secondary text-opacity-75 ms-3">
            Subscription payment will auto
            {<spam className="font-family-sans">-</spam>}billed on 25 Oct 2025
            for {<span className="font-family-sans">${total}</span>} from your
            credit card, unless cancelled otherwise
          </p>
        </div>
      </div>
    </section>
  );
}
