import React, { useState, useEffect } from 'react';

const TimerContext = React.createContext({});


export const TimerProvider = ({ children }) => {

    const [currentTime, setCurrentTime] = useState(0);

    return <TimerContext.Provider value={{
      currentTime,
      setCurrentTime
    }}>
        {children}
        </TimerContext.Provider>
};


export default TimerContext;
