import React, { createContext, useState } from "react";

export const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

console.log(selectedDate)
  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
