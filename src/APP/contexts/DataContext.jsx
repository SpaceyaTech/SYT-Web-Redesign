import { createContext, useContext, useReducer } from "react";

const initialState = {
  chapters: null,
  chapter: null,
  blogs: null,
  blog: null,
  resources: null,
};

const DataStateContext = createContext();
const DataDispatchContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHAPTERS":
      return { ...state, chapters: action.payload };
    case "SET_ONE_CHAPTER":
      return { ...state, chapter: action.payload };
    case "SET_BLOGS":
      return { ...state, blogs: action.payload };
    case "SET_ONE_BLOG":
      return { ...state, blog: action.payload };
    case "SET_RESOURCES":
      return { ...state, resources: action.payload };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
};

const useDataState = () => {
  const context = useContext(DataStateContext);
  if (!context) {
    throw new Error("useDataState must be used within a DataProvider");
  }
  return context;
};

const useDataDispatch = () => {
  const context = useContext(DataDispatchContext);
  if (!context) {
    throw new Error("useDataDispatch must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useDataState, useDataDispatch };
