import React, { useRef } from "react";
import TextInput from "../../components/input/TextInput";
import { InputType, SubscriptionFormSteps } from "../../utils/enum";
import { useState } from "react";
import { RegexPatterns } from "../../utils/constants";
import { useSubscriptionContext } from "../../components/contextProviders/SubscriptionContext";

export default function LoginForm() {
  const { changeActiveStep } = useSubscriptionContext();

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const emailRef = useRef(null);

  function onClickHandler() {
    sessionStorage.setItem("email", emailRef.current.value);
    changeActiveStep(
      SubscriptionFormSteps.CHECKOUT,
      SubscriptionFormSteps.LOGIN,
      emailRef.current.value
    );
  }

  return (
    <section className="w-100 rounded-4 bg-dark custom-dark-shadow p-4 p-sm-5">
      <p className="text-primary fs-6 fw-nomral mb-0">
        Login to redeem rewards
      </p>
      <p className="fs-10 fw-light">
        Don<span className="font-family-sans">'</span>t have an account? You can
        enroll in the next step
      </p>
      <div className="d-flex flex-column gap-3 mt-4">
        <TextInput
          inputType={InputType.EMAIL}
          label="Email Address or MMR number"
          id="email"
          isValid={emailValid}
          setIsValid={setEmailValid}
          defaultValue={sessionStorage.getItem("email") ?? ""}
          validationPattern={RegexPatterns.Email}
          errorText={"Please enter a valid email"}
          ref={emailRef}
        />
        <TextInput
          inputType={InputType.PASSWORD}
          label="Password"
          id="password"
          isValid={passwordValid}
          setIsValid={setPasswordValid}
          defaultValue={""}
          validationPattern={RegexPatterns.password}
          errorText={"Password is required"}
        />
      </div>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center mt-5">
        <button
          disabled={!emailValid && !passwordValid}
          onClick={onClickHandler}
          className="btn btn-danger text-primary px-4 py-2 fs-10 w-100"
        >
          Send login code
        </button>
        <p className="text-secondary fs-8 mt-1 mb-0">
          Don<span className="font-family-sans">'</span>t have an account
          <span className="font-family-sans">?</span>
          <a
            href=" "
            onClick={(event) => event.preventDefault()}
            className="text-primary-emphasis underline ms-1"
          >
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
}
