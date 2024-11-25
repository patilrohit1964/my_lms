import { combineReducers } from "redux";
import authReducer from "../features/authSlice";
import { authApi } from "@/features/api/apiApi";
import { courseApi } from "@/features/api/courseApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  auth: authReducer,
});

export default rootReducer;
