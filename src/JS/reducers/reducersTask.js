import {
  ADD_TASK,
  CHECK_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../constants/actionTypes";

const initialState = {
  listItems: [],
};

export const reducersTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, listItems: [...state.listItems, action.payload] };

    case DELETE_TASK:
      return {
        ...state,
        listItems: state.listItems.filter((el) => el.id !== action.payload),
      };

    case EDIT_TASK:
        return  { ...state, listItems: state.listItems.map((el) => el.id === action.payload.id
              ? { ...el, text: action.payload.text }
              : el)} ;

    case CHECK_TASK:
        return  { ...state, listItems: state.listItems.map((el) => el.id === action.payload
            ? { ...el, isDone: !el.isDone }
            : el
          ),} ;

    default:
      return state;
  }
};
