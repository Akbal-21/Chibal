import { InternationalState } from "./";

type InternationalActionType = {
  type: "[International] - Change Language";
  payload: string;
};

export const internationalReducer = (
  state: InternationalState,
  action: InternationalActionType,
): InternationalState => {
  switch (action.type) {
    case "[International] - Change Language":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
