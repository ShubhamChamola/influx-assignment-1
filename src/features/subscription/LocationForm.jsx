import SelectInput from "../../components/input/SelectInput";
import stateOptions from "../../assets/data/statesData.json";
import Search from "../../assets/icons/Search";
import { useState } from "react";
import { useSubscriptionContext } from "../../components/contextProviders/SubscriptionContext";
import { SubscriptionFormSteps } from "../../utils/enum";

function getInitialLocation() {
  let value = sessionStorage.getItem("location");
  if (value) {
    return JSON.parse(value);
  }
  return null;
}

export default function LocationForm() {
  const { changeActiveStep } = useSubscriptionContext();
  const [selectedState, setSelectedState] = useState(() =>
    getInitialLocation()
  );

  function handleSelection(value) {
    setSelectedState(value);
  }

  function labelConstructor(value) {
    return `${value.city}, ${value.state}`;
  }

  function onClickHandler() {
    sessionStorage.setItem("location", JSON.stringify(selectedState));

    let newText = `${selectedState.city}, ${selectedState.state}`;
    changeActiveStep(
      SubscriptionFormSteps.BILLING,
      SubscriptionFormSteps.LOCATION,
      newText
    );
  }

  return (
    <section
      className="w-100 rounded-4 bg-dark location-form-wrapper custom-dark-shadow 
    "
    >
      <div className="p-4 p-sm-5">
        <div className="w-fit m-auto">
          <p className="text-primary-emphasis fs-10 fw-medium mb-0">
            STEP 1<span className="font-family-sans">/</span>2
          </p>
          <p className="text-primary fs-7 mb-3 pb-2">
            Pick your favourite Marcus theatre
          </p>
        </div>

        <SelectInput
          placeHolder="Search by city, theatre or zipcode..."
          options={stateOptions}
          onSelection={handleSelection}
          getLabel={labelConstructor}
          icon={<Search size="15px" />}
          selectedValue={selectedState}
        />
      </div>

      <div className="d-flex justify-content-end py-4 px-3 px-sm-4 bg-dark-subtle rounded-bottom-4">
        <button
          disabled={selectedState === null}
          onClick={onClickHandler}
          className="btn btn-danger text-primary px-4 py-2 fs-10 "
        >
          Save <span className="font-family-sans">&</span> Next
        </button>
      </div>
    </section>
  );
}
