"use client";
import { createContext, useContext, useReducer } from "react";

export const MapContext = createContext();

export const useMapContext = function () {
  const context = useContext(MapContext);
  return context;
};

export const MapContextProvider = function ({ children }) {
  const initialState = {
    selectedLocation: [],
  };

  const mapReducer = function (state, action) {
    switch (action.type) {
      case "LOAD_LOCATION":
        return {
          ...state,
          selectedLocation: [...action.payload],
        };

      case "ADD_NEW_LOCATION":
        return {
          ...state,
          selectedLocation: [...state.selectedLocation, action.payload],
        };
      case "EDIT_LOCATION": {
        return { ...state, selectedLocation: [] };
      }
      case "DELETE_LOCATION": {
        const tourId = action.payload;
        const locationAfterDelete = state.selectedLocation.filter(
          (item) => item.coordinates.join(",") !== tourId
        );
        return { ...state, selectedLocation: [...locationAfterDelete] };
      }

      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(mapReducer, initialState);

  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  );
};
