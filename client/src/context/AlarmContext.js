import React, { createContext, useState, useEffect } from "react";

const AlarmContext = createContext();

const AlarmProvider = ({ children }) => {
  const [alarm, setAlarm] = useState("10.30");

  return (
    <AlarmContext.Provider
      value={{
        alarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};

export { AlarmContext, AlarmProvider };
