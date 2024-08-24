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
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    }, [inputValue]);

    useEffect(() => {
      if (debouncedValue || dirty) {
        const regex = new RegExp(validationPattern);
        setIsValid && setIsValid(regex.test(debouncedValue));
      }
    }, [debouncedValue]);

    function onChangeHandler(event) {
      setInputValue(event.target.value);
      setDirty(true);
    }

    function onBlurHandler(event) {
      if (!dirty) {
        setDirty(true);
      }

      let value = event.target.value;

      if (value.length === 0) {
        setInputValue(event.target.value);
      }
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
        {dirty && !isValid && errorText && (
          <p className="fs-10 text-danger mt-1 mb-0">{errorText}</p>
        )}
      </div>
    );
  }
);

export default TextInput;
