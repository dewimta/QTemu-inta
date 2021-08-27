// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// const initialState = {
//     meeting : []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "CREATE":
//         return {...state, meeting:[...state.meeting, action.meeting]}
//       default:
//         return state;
//     }
// }

// const store = createStore(reducer, applyMiddleware(thunk, logger));

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice"

export default configureStore({
  reducer:{
    user:userReducer
  }
})