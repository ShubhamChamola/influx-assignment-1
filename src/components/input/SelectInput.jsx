import { useEffect, useRef, useState } from "react";

export default function SelectInput({
  placeHolder,
  options,
  onSelection,
  selectedValue: value,
  getLabel = null,
  icon = null,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    if (selectedValue) {
      inputRef.current.value = getLabel(selectedValue);
    }

    function handler(event) {
      if (event.target === inputRef.current) {
        return;
      }
      setShowDropdown(false);
    }

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchText]);

  useEffect(() => {
    onSelection(selectedValue);
  }, [selectedValue]);

  function handleInputClick() {
    if (!showDropdown) {
      setShowDropdown(true);
      setDebouncedSearchText("");
      if (inputRef.current.value.trim().length > 0) {
        inputRef.current.value = "";
      }
      setSelectedValue(null);
    }
  }

  function handleInputChange(event) {
    let text = event.target.value;
    setDebouncedSearchText(text);
  }

  function handleOptionClick(value) {
    setSearchText("");
    setSelectedValue(value);
    inputRef.current.value = getLabel(value);
  }

  function Dropdown() {
    const filteredOptions = options.filter((option) => {
      if (debouncedSearchText.trim().length > 0) {
        const lowerSearchText = debouncedSearchText.toLowerCase();
        return (
          option.city.toLowerCase().includes(lowerSearchText) ||
          option.state.toLowerCase().includes(lowerSearchText)
        );
      } else {
        return true;
      }
    });

    return (
      <ul className="dropdown">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => {
            let label = getLabel(option);
            return (
              <li
                className={`${
                  label === selectedValue
                    ? getLabel(selectedValue)
                      ? "active"
                      : ""
                    : ""
                }`}
                key={label}
                onClick={() => handleOptionClick(option)}
              >
                {label}
              </li>
            );
          })
        ) : (
          <li className="no-option">No options available</li>
        )}
      </ul>
    );
  }

  return (
    <div className="select-input-wrapper">
      <div className="search-wrapper">
        {icon && icon}
        <input
          ref={inputRef}
          type="text"
          onClick={handleInputClick}
          onChange={(event) => handleInputChange(event)}
          placeholder={placeHolder}
        />
      </div>

      {showDropdown && <Dropdown />}
    </div>
  );
}
