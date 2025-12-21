"use client";

import {
  ActionDispatch,
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";

interface settingType {
  currRightWindow: string;
  fontSize: string;
  dispatch: ActionDispatch<[action: actionType]>;
}

interface actionType {
  type: string;
  payload: string;
}

const SettingsContext = createContext<settingType>({
  currRightWindow: "",
  fontSize: "",
  dispatch: () => {},
});

const initialState = {
  currRightWindow: "",
  fontSize: "",
};

function reducer(state: settingType, action: actionType) {
  switch (action.type) {
    case "currWindowIs":
      return {
        ...state,
        currRightWindow: action.payload,
      };
    case "changeFontSize":
      return {
        ...state,
        fontSize: action.payload,
      };
    default:
      throw new Error("something went wrong!");
  }
}

function SettingsProvider({ children }: { children: ReactNode }) {
  const [{ currRightWindow, fontSize }, dispatch] = useReducer(
    reducer,
    initialState as settingType,
  );

  return (
    <SettingsContext.Provider value={{ currRightWindow, fontSize, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined)
    throw new Error("Settings Context shouldn't be used here");
  return context;
}

export { useSettings, SettingsProvider };
