import { types } from "../types/types";

const initialState = {
  pets : [],
  active: []
}

export const petReducer = ( state = initialState, action ) => {

  switch (action.type) {
        
    case types.petClearActive:
      return {
        ...state,
        active: null
      }

    case types.petLoaded:
      return {
        ...state,
        pets: [...action.payload ]
      }
    case types.petLoadImage: 
      return {
          ...state,
          active: { 
            ...{ url: action.payload }
          }
      }
    case types.petLoadTypes: 
    return {
     ...state,
       tps: [...action.payload ]
    }
  
    default:
      return state;
  }
}

