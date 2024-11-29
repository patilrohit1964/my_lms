import { combineReducers } from "redux";
import authReducer from "../features/authSlice";
import { authApi } from "@/features/api/apiApi";
import { courseApi } from "@/features/api/courseApi";
import { purchaseApi } from "@/features/api/purchaseApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  [purchaseApi.reducerPath]: purchaseApi.reducer,
  auth: authReducer,
});

export default rootReducer;
