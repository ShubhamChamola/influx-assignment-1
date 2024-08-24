import { useState, useEffect, forwardRef } from "react";

const TextInput = forwardRef(
  (
    {
      inputType,
      id,
      label,
      validationPattern,
      errorText,
      isValid = null,
      setIsValid = null,
      defaultValue = null,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");
    const [touched, setTouched] = useState(false);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    }, [inputValue]);

    useEffect(() => {
      if (debouncedValue && setIsValid) {
        const regex = new RegExp(validationPattern);
        setIsValid(regex.test(debouncedValue));
      }
    }, [debouncedValue, setIsValid, validationPattern]);

    function onChangeHandler(event) {
      setInputValue(event.target.value);
    }

    function onBlurHandler(event) {
      if (!touched) setTouched(true);

      const regex = new RegExp(validationPattern);
      setIsValid(regex.test(event.target.value));
    }

    return (
      <div className="input-wrapper">
        <label htmlFor={id} className="fs-10">
          {label}
        </label>
        <input
          id={id}
          type={inputType}
          onChange={onChangeHandler}
          defaultValue={defaultValue}
          onBlur={onBlurHandler}
          ref={ref}
        />
        {touched && !isValid && errorText && (
          <p className="fs-10 text-danger mt-1 mb-0">{errorText}</p>
        )}
      </div>
    );
  }
);

export default TextInput;
