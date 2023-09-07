import React from "react";

const CounterContext = React.createContext(undefined);
const CounterActionContext = React.createContext(undefined);

function CounterProvider({ children, value, action }) {
  return (
    <CounterActionContext.Provider value={action}>
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    </CounterActionContext.Provider>
  );
}

function useCounterContext() {
  const context = React.useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

function useCounterActionContext() {
  const context = React.useContext(CounterActionContext);

  if (context === undefined) {
    throw new Error("useCounterActionContext must be used within a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounterContext, useCounterActionContext };
