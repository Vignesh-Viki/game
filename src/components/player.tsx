import React, {useState, useContext, useEffect} from 'react';
import ReactSVG from 'react-svg';
import PlayerContext from '../context/player-info';
import TimerContext from '../context/timer-info';
import { slideInRight,slideInLeft } from 'react-animations';
import styled, { keyframes } from "styled-components";
import { func, element } from 'prop-types';

let Symbol = styled.div`
  min-width: 50px;
  width: 50px;
  fill: #aaa;
  height: 50px;
  justify-content: space-around;
`;

let margin = 0;

let AnimatedSymbol = styled(Symbol)``;

let timerId;

function checkMissile(leftMargin, direction){
  const marginLimit = [['Bounce3s'], ['Bounce4s'], ['Bounce5s']];
  
  for (var i =0; i< marginLimit.length; i++){
    console.log(marginLimit[i][0])
    let element = document.getElementById(marginLimit[i][0])
    if(element){
      let pos = Number(getComputedStyle(element).getPropertyValue('transform').split(',')[5].replace(')',''));
      let dif = 5;
      console.log(leftMargin)
      console.log(Number(element.offsetLeft + 15))
      console.log(leftMargin - Number(element.offsetLeft + 15))
      if(pos > -25 && pos < 25 
        && (leftMargin - Number(element.offsetLeft + 15) < (dif + 25))
        && (leftMargin - Number(element.offsetLeft + 15) > -dif)
      ){
        return false;
      }
    }
  }
  return true;
}

const reset = () => {
  clearInterval(timerId);
  margin = 0
  AnimatedSymbol = styled(Symbol)`
  margin-left: ${margin}px
  `;
}

const Player: React.FC = () => {
    const player = useContext(PlayerContext);
    const usersContext = useContext(TimerContext);
    const currentTime = usersContext['currentTime'];
    const setCurrentTime = usersContext['setCurrentTime'];
    const [ direction, setDirection ] = useState('right');
    const [ keyPressed ] = useState(false);
    const isRunning = player["isRunning"];
    function changeDirection(event) {
      if (event.keyCode === 39 || event.keyCode === 37){
        clearInterval(timerId);
      }
      if (event.keyCode === 39) {
        setDirection('right');
        timerId = setInterval(() => {
          if(!checkMissile(margin, 'right')){
            alert('You got Hit!!! Try again');
            setCurrentTime(currentTime =>0);
            reset();
            setDirection(''+Date.now()); 
          }
          margin += 5;
          AnimatedSymbol = styled(Symbol)`
          margin-left: ${margin}px
          `;
          setDirection(''+Date.now());
          if(margin > 1300){
            alert('You won the game !!!');
            setCurrentTime(currentTime =>0);
            reset();
            setDirection(''+Date.now());
          }
        }, 25);
      }
      if (event.keyCode === 37) {
        setDirection('left');
        timerId = setInterval(() => {
          if(!checkMissile(margin, 'left')){
            alert('You got Hit !!! Try again');
            reset();
            setDirection(''+Date.now()); 
          }
          if(margin > 0){
            margin -= 5;
          }else{
            clearInterval(timerId);
          }
          AnimatedSymbol = styled(Symbol)`
          margin-left: ${margin}px
          `;
          setDirection(''+Date.now());
        }, 25);
      }
    }

    useEffect(() => {
      onkeydown = changeDirection;
    }, []);
    return (
      <AnimatedSymbol>
        <ReactSVG
            src="running-man.svg"
        />
      </AnimatedSymbol>
    );
}

export default Player;
