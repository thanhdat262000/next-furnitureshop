import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ALL_PROJECTS,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECT_BY_CATEGORY,
  GET_ALL_PROJECT_BY_SERVICE,
  GET_ALL_PROJECT_BY_SERVICE_SUCCESS,
  GET_ALL_PROJECT_BY_CATEGORY_SUCCESS,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_ID_SUCCESS,
} from "./action";

var initialState = {
  loading: false,
  projects: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case GET_ALL_PROJECTS:
    case GET_ALL_PROJECT_BY_SERVICE:
    case GET_ALL_PROJECT_BY_CATEGORY:
    case GET_PROJECT_BY_ID:
      return { ...state, loading: true };
    case GET_ALL_PROJECT_BY_SERVICE_SUCCESS:
    case GET_ALL_PROJECT_BY_CATEGORY_SUCCESS:
    case GET_PROJECT_BY_ID_SUCCESS:
    case GET_ALL_PROJECTS_SUCCESS:
      return { ...state, loading: false, projects: action.payload.projects };
    default:
      return state;
  }
};
