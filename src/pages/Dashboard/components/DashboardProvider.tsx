import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

// Define the context type
type DashboardContextType = {
  isInDashboardPage: boolean;
  setIsInDashboardPage: Dispatch<SetStateAction<boolean>>;
};

// Create the context
export const DashboardContext = createContext<DashboardContextType>({
  isInDashboardPage: false,
  setIsInDashboardPage: () => {},
});

// Create a provider component
export const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [isInDashboardPage, setIsInDashboardPage] = useState(true);
  // Memoize the context value object
  const contextValue = useMemo(
    () => ({
      isInDashboardPage,
      setIsInDashboardPage,
    }),
    [isInDashboardPage]
  );

  return (
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useDashboardPageStatus = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      'useDashboardPageStatus must be used within a DashboardProvider'
    );
  }
  return context;
};
