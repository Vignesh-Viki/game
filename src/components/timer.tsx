import React, { useState, useContext, useEffect } from 'react';
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import TimerContext from '../context/timer-info';

const Container = styled.div`
  margin-top: 50px;
  font-size: 25px;
`;

const Timer: React.FC = () => {

  const usersContext = useContext(TimerContext);
  const currentTime = usersContext['currentTime'];
  const setCurrentTime = usersContext['setCurrentTime'];
  
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(currentTime => (currentTime + 1));
    }, 1000)
  }, [0]);
  
  return (
    <Container>
      {currentTime}
    </Container>
  );

}
export default Timer;
