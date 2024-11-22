import { combineReducers } from "redux";
import authReducer from "../features/authSlice";
import { authApi } from "@/features/api/apiApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

export default rootReducer;
