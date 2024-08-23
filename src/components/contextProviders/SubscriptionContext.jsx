import { createContext, useContext, useReducer } from "react";
import {
  SubscriptionFormSteps,
  SubscriptionReducerActions,
} from "../../utils/enum";

const SubscriptionContext = createContext();

const initialState = {
  activeStep: SubscriptionFormSteps.LOCATION,
  stepsConfig: {
    [SubscriptionFormSteps.LOCATION]: {
      label: "Step 1",
      text: "Pick your theatre",
    },
    [SubscriptionFormSteps.BILLING]: {
      label: "Step 2",
      text: "Select billing cycle",
    },
    [SubscriptionFormSteps.LOGIN]: {
      label: "Login",
      text: "Login or Sign up",
    },
    [SubscriptionFormSteps.CHECKOUT]: {
      label: "Checkout",
      text: "Select payment method",
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SubscriptionReducerActions.CHANGE_ACTIVE_STEP: {
      let newStep = action.newStep;

      let updatedConfig = { ...state.stepsConfig };

      let targetedStepID = action.stepID;
      let updatedStepText = action.stepText;

      let targetedStep = { ...updatedConfig[targetedStepID] };
      updatedConfig[targetedStepID] = {
        label: targetedStep.text,
        text: updatedStepText,
      };

      return {
        ...state,
        activeStep: newStep,
        stepsConfig: updatedConfig,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const SubscriptionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    activeStep: state.activeStep,
    stepsConfig: state.stepsConfig,
    changeActiveStep: (newStep, stepID, stepText) => {
      dispatch({
        type: SubscriptionReducerActions.CHANGE_ACTIVE_STEP,
        stepID,
        stepText,
        newStep,
      });
    },
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptionContext = () => useContext(SubscriptionContext);
