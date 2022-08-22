import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../common/redux-helper";

export const Types = {
  SetValue: "common/SetValue",
  FetchAutoComplete: "common/FetchAutoStatus",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchAutoComplete: (keyword) => ({
    type: Types.FetchAutoComplete,
    keyword,
  }),
};

const INITIAL_STATE = {
  keyword: "",
  autoCompletes: [],
};

const searchReducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default searchReducer;
