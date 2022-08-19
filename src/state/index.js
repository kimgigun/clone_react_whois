import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../common/redux-helper";

export const Types = {
  SetValue: "common/SetValue",
  FetchAutoComplete: "common/FetchAutoStatus",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
};
//abc
const INITIAL_STATE = {
  keyword: "",
  autoCompletes: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});
export default reducer;
